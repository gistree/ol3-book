(function () {

    var source = new ol.source.Vector({
        format: new ol.format.GeoJSON({
            defaultDataProjection: 'EPSG:3857'
        }),
        url: '../assets/geojson/countries.json'
    });
    var countries = new ol.layer.Vector({
        source: source,
    });
    var center = ol.proj.transform([0, 0], 'EPSG:4326', 'EPSG:3857');
    var view = new ol.View({
        center: center,
        zoom: 1
    });
    var map = new ol.Map({
        target: 'map',
        view: view,
        layers: [countries]
    });

    var baseTextStyle = {
        font: '12px Calibri,sans-serif',
        textAlign: 'center',
        offsetY: -15,
        fill: new ol.style.Fill({
            color: [0, 0, 0, 1]
        }),
        stroke: new ol.style.Stroke({
            color: [255, 255, 255, 0.5],
            width: 4
        })
    };
    var highlightStyle = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: [255, 0, 0, 0.6],
            width: 2
        }),
        fill: new ol.style.Fill({
            color: [255, 0, 0, 0.2]
        }),
        zIndex: 1
    });

    function styleFunction(feature, resolution) {
        var style;
        var geom = feature.getGeometry();
        if (geom.getType() == 'Point') {
            var text = feature.get('text');
            baseTextStyle.text = text;
            var isoCode = feature.get('isoCode').toLowerCase();
            style = new ol.style.Style({
                text: new ol.style.Text(baseTextStyle),
                image: new ol.style.Icon({
                    src: '../assets/img/flags/' + isoCode + '.png'
                }),
                zIndex: 2
            });
        } else {
            style = highlightStyle;
        }
        return [style];
    }
    var featureOverlay = new ol.layer.Vector({
        map: map,
        style: styleFunction,
        source: new ol.source.Vector()
    });

    map.on('pointermove', function (browserEvent) {
        featureOverlay.getSource().clear();
        var coordinate = browserEvent.coordinate;
        var pixel = browserEvent.pixel;
        map.forEachFeatureAtPixel(pixel, function (feature, layer) {
            if (!layer) {
                return; // ignore features on the overlay
            }
            var geometry = feature.getGeometry();
            var point;
            switch (geometry.getType()) {
                case 'MultiPolygon':
                    var poly = geometry.getPolygons()
                        .reduce(function (left, right) {
                            return left.getArea() > right.getArea() ? left : right;
                        });
                    point = poly.getInteriorPoint().getCoordinates();
                    break;
                case 'Polygon':
                    point = geometry.getInteriorPoint().getCoordinates();
                    break;
                default:
                    point = geometry.getClosestPoint(coordinate);
            }
            textFeature = new ol.Feature({
                geometry: new ol.geom.Point(point),
                text: feature.get('name'),
                isoCode: feature.get('iso_a2').toLowerCase()
            });
            featureOverlay.getSource().addFeature(textFeature);
            featureOverlay.getSource().addFeature(feature);
        });
    });

    window.test = featureOverlay;
})();