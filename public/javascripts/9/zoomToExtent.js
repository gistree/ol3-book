(function () {
    var raster = new ol.layer.Tile({
        source: new ol.source.Stamen({
            layer: 'watercolor'
        })
    });
    var london = ol.proj.transform([-0.12755, 51.507222], 'EPSG:4326', 'EPSG:3857');
    var view = new ol.View({
        center: london,
        zoom: 6
    });
    var map = new ol.Map({
        target: 'map',
        controls: ol.control.defaults({})
    });
    map.addLayer(raster);
    map.setView(view);

    var zoomToExtentControl = new ol.control.ZoomToExtent({
        extent: [-11243808.051695308, 4406397.202710291, -4561377.290892059, 6852382.107835932]
    });
    map.addControl(zoomToExtentControl);
    var controls = map.getControls();
    var attributionControl;
    controls.forEach(function (el) {
        if (el instanceof ol.control.Attribution) {
            attributionControl = el;
            map.removeControl(attributionControl);
        }
    })

})();