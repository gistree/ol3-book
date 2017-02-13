(function () {
    var raster = new ol.layer.Tile({
        source: new ol.source.Stamen({
            layer: 'terrain'
        })
    });
    var london = ol.proj.transform([-0.12755, 51.507222], 'EPSG:4326', 'EPSG:3857');
    var view = new ol.View({
        center: london,
        zoom: 6
    });

    var mousePosition = new ol.control.MousePosition({
        coordinateFormat: function(coor){
            return ol.coordinate.toStringHDMS(coor);
        },
        projection: 'EPSG:4326',
        target: document.getElementById('mouse_position'),
        undefinedHTML: '&nbsp;'
    });

    var map = new ol.Map({
        target: 'map',
        controls: ol.control.defaults({})
    });
    map.addLayer(raster);
    map.setView(view);
    map.addControl(mousePosition);

})();