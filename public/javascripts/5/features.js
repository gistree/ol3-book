(function () {
    var source = new ol.source.Vector({
        format: new ol.format.GeoJSON({
            defaultDataProjection: 'EPSG:3857'
        }),
        url: '../assets/geojson/countries.json'
    });
    var countries = new ol.layer.Vector({
        source: source
    });
    var center = ol.proj.transform([0, 0], 'EPSG:4326', 'EPSG:3857');
    var view = new ol.View({
        center: center,
        zoom: 1,
    });
    var map = new ol.Map({
        target: 'map',
        layers: [countries],
        view: view
    });
    map.on('pointermove', function (browserEvent) {
        var coordinate = browserEvent.coordinate;
        var pixel = map.getPixelFromCoordinate(coordinate);
        var el = document.getElementById('name');
        el.innerHTML = '';
        map.forEachFeatureAtPixel(pixel, function (feature) {
            el.innerHTML += feature.get('name') + '<br>';
        });
    });

})();