(function () {

    var vectorLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: '../assets/geojson/countries.json',
            format: new ol.format.GeoJSON()
        })
    });
    var kmlSource = new ol.source.Vector({
        url: '../assets/kml/earthquakes.kml',
        format: new ol.format.KML({
            showPointNames: false
        })
    });
    var kmlLayer = new ol.layer.Vector({
        source: kmlSource
    });
    var map = new ol.Map({
        target: 'map',
        layers: [vectorLayer, kmlLayer],
        view: new ol.View({
            center: ol.proj.transform([0, 0], 'EPSG:4326', 'EPSG:3857'),
            zoom: 1,
        })
    });

})();