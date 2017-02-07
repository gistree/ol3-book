(function () {

    var center = ol.proj.transform([0, 0], 'EPSG:4326', 'EPSG:3857');
    var view = new ol.View({
        center: center,
        zoom: 1
    });

    var countryStyle = new ol.style.Style({
        fill: new ol.style.Fill({
            color: [0, 255, 255, 1]
        }),
        stroke: new ol.style.Stroke({
            color: [127, 127, 127, 1.0],
            width: 10,
            lineJoin: 'bevel',
        })
    });
    var timezoneStyle = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: [64, 200, 200, 0.5],
            lineJoin: 'round',
            width: 10
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

    var timezones = new ol.layer.Vector({
        source: new ol.source.Vector({
            format: new ol.format.KML({
                extractStyles: false
            }),
            projection: 'EPSG:3857',
            url: '../assets/kml/timezones.kml'
        }),
        style: timezoneStyle
    });

    var map = new ol.Map({
        target: 'map',
        view: view,
        layers: [countries, timezones]
    });

})();