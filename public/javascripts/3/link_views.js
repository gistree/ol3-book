(function () {
    var layer = new ol.layer.Tile({
        source: new ol.source.OSM()
    });
    var london = ol.proj.transform([-0.12755, 51.507222],'EPSG:4326', 'EPSG:3857');
    var view = new ol.View({
        center: london,
        zoom: 6,
    });
    var view2 = new ol.View({
        center:london,
        zoom:6
    });
    var map1 = new ol.Map({
        target: 'map1',
        layers: [layer],
        view: view
    });
    var map2 = new ol.Map({
        target: 'map2',
        layers: [layer],
        view: view2
    });
    
    view.on('propertychange', function(e){
        view2.setZoom(view.getZoom() + 2);
        view2.setCenter(view.getCenter());
        map2.setView(view2);
    });

})();