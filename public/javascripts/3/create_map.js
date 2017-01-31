(function () {

    var layer = new ol.layer.Tile({
        source: new ol.source.OSM()
    });
    var london = ol.proj.transform([-0.12755, 51.507222],
        'EPSG:4326', 'EPSG:3857');
    var view = new ol.View({
        center: london,
        zoom: 6,
    });
    var map = new ol.Map({
        target: 'map',
        layers: [layer],
        view: view
    });
})();