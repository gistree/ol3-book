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
    var dragBoxInteraction = new ol.interaction.DragBox({
        condition: ol.events.condition.shiftKeyOnly,
        className: 'my_drag_box'
    });
    dragBoxInteraction.on('boxend', function (e) {
        var format = new ol.format.GeoJSON();
        var geom = e.target.getGeometry();
        geom.transform('EPSG:3857', 'EPSG:4326');
        var feature = new ol.Feature({
            geometry: geom
        });
        var obj = format.writeFeatures([feature]);
        console.log(JSON.stringify(obj));
    });
    var map = new ol.Map({
        target: 'map',
        interactions: ol.interaction.defaults({
            shiftDragZoom: false
        }).extend([dragBoxInteraction]),
        keyboardEventTarget: document
    });
    map.addLayer(raster);
    map.setView(view);


})();