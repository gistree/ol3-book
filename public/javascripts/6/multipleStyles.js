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
            color: [101, 95, 90, 1],
            width: 1
        }),
        zIndex: 2
    });
    var shadowStyle = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: [0, 0, 127, 0.15],
            width: 5
        }),
        zIndex: 1
    });
    var countries = new ol.layer.Vector({
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON({
                defaultDataProjection: 'EPSG:3857'
            }),
            url: '../assets/geojson/countries.json'
        }),
        style: [countryStyle, shadowStyle]
    });
    var map = new ol.Map({
        target: 'map',
        view: view,
        layers: [countries]
    });

})();