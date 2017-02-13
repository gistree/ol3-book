;
(function () {

    goog.require('ol.geom.Point');
    goog.require('ol.layer.Tile');
    goog.require('ol.Map');
    goog.require('ol.proj');
    goog.require('ol.source.Stamen');
    goog.require('ol.style.Icon');
    goog.require('ol.View');

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
        interactions: ol.interaction.defaults({
            keyboard: true,
            altShiftDragRotate: false,
            mouseWheelZoom: false,
        }),
        keyboardEventTarget: document
    });
    map.addLayer(raster);
    map.setView(view);

})();