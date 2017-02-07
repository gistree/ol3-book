(function () {

    var center = ol.proj.transform([0, 0], 'EPSG:4326', 'EPSG:3857');
    var view = new ol.View({
        center: center,
        zoom: 1
    });

    var countryStyle = new ol.style.Style({
        fill: new ol.style.Fill({
            color: [203, 194, 185, 1]
        }),
        stroke: new ol.style.Stroke({
            color: [177, 163, 148, 0.5],
            width: 2
        })
    });

    var earthquakeStyle = new ol.style.Style({
        image: new ol.style.Circle({
            radius: 4,
            fill: new ol.style.Fill({
                color: [121,0,121, 0.3]
            }),
        })
    });

    var countries = new ol.layer.Vector({
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON({
                defaultDataProjection: 'EPSG:3857'
            }),
            url: '../assets/geojson/countries.json'
        }),
        style: countryStyle
    });
    var earthquakes = new ol.layer.Vector({
        source: new ol.source.Vector({
            projection: 'EPSG:3857',
            url: '../assets/kml/earthquakes.kml',
            format: new ol.format.KML({
                extractStyles: false
            })
        }),
        style: earthquakeStyle
    });
    var map = new ol.Map({
        target: 'map',
        view: view,
        layers: [countries, earthquakes]
    });

})();