var layer = new ol.layer.Tile({
    source: new ol.source.OSM()
});
var london = ol.proj.transform([-1.812, 52.443], 'EPSG:4326', 'EPSG:3857');
var rome = ol.proj.transform([12.5, 41.9], 'EPSG:4326', 'EPSG:3857');

var view = new ol.View({
    center: london,
    zoom: 6
});
var map = new ol.Map({
    target: 'map',
    layers: [layer],
    view: view
});

function doBounce(location) {
    var bounce = ol.animation.bounce({
        resolution: map.getView().getResolution() * 2
    });
    var pan = ol.animation.pan({
        source: map.getView().getCenter()
    });
    map.beforeRender(bounce);
    map.beforeRender(pan);
    map.getView().setCenter(location);
}

function doPan(location) {
    var pan = ol.animation.pan({
        source: map.getView().getCenter()
    });
    map.beforeRender(pan);
    map.getView().setCenter(location);
}

function doRotate() {
    var rotate = ol.animation.rotate({
        rotation: Math.PI * 1500
    });
    map.beforeRender(rotate);
}

function doZoom(factor) {
    var resolution = map.getView().getResolution();
    var zoom = ol.animation.zoom({
        resolution: resolution
    });
    map.beforeRender(zoom);
    map.getView().setResolution(resolution * factor);
}