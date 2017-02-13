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
    var map = new ol.Map({
        target: 'map',
        controls: ol.control.defaults({
            attributionOptions: {
                className: 'myCustomClass',
                target: document.getElementById('myattr'),
            },
        })
    });
    map.addLayer(raster);
    map.setView(view);
    map.addControl(new ol.control.FullScreen());
})();