(function () {

    var popup = new ol.Overlay({
        element: document.getElementById('popup')
    });

    var osmLayer = new ol.layer.Tile({
        source: new ol.source.OSM()
    });

    var selectEuropa = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#ff0000',
            width: 2
        })
    });
    var defaultEuropa = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#0000ff',
            width: 2
        })
    });
    var vectorEuropa = new ol.layer.Vector({
        id: 'europa',
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON({
                defaultDataProjection: 'EPSG:4326',
                featureProjection: 'EPSG:3857'
            }),
            url: '../assets/geojson/nutsv9_lea.json'
        }),
        style: defaultEuropa
    });

    var ol3_sprint_location = ol.proj.transform([-1.20472, 52.93646],
        'EPSG:4326', 'EPSG:3857');
    var view = new ol.View({
        center: ol3_sprint_location,
        zoom: 16
    });
    var map = new ol.Map({
        target: 'map'
    });
    map.addLayer(osmLayer);
    map.addLayer(vectorEuropa);
    map.addOverlay(popup);
    map.setView(view);

    var selectInteraction = new ol.interaction.Select({
        layers: function (layer) {
            return layer.get('id') == 'europa';
        }
    });

    function pickRandomProperty() {
        var prefix = ['bottom', 'center', 'top'];
        var randPrefix = prefix[Math.floor(Math.random() * prefix.length)];
        var suffix = ['left', 'center', 'right'];
        var randSuffix = suffix[Math.floor(Math.random() * suffix.length)];
        return randPrefix + '-' + randSuffix;
    }
    var container = document.getElementById('popup');
    var displayFeatureInfo = function (pixel, coordinate) {
        var features = [];
        map.forEachFeatureAtPixel(pixel, function (feature, layer) {
            features.push(feature);
        });
        if (features.length > 0) {
            var info = [];
            for (var i = 0, ii = features.length; i < ii; ++i) {
                info.push(features[i].get('N3NM'));
            }
            container.innerHTML = info.join(', ') || '(unknown)';
            var randomPositioning = pickRandomProperty();
            popup.setPositioning(randomPositioning);
            popup.setPosition(coordinate);
        } else {
            container.innerHTML = '&nbsp;';
        }
    };
    map.on('click', function (evt) {
        var coordinate = evt.coordinate;
        displayFeatureInfo(evt.pixel, coordinate);
    });
})();