(function(){
    var layer = new ol.layer.Tile({
        source: new ol.source.OSM()
    });
    var center = ol.proj.transform([-1.812, 52.443], 'EPSG:4326', 'EPSG:3857');
    var view = new ol.View({
        center: center,
        zoom: 6
    });
    var map = new ol.Map({
        target: 'map_with_minimap',
        layers: [layer],
        view: view
    });
    var map = new ol.Map({
        target: 'minimap',
        layers: [layer],
        view: view
    });
})();