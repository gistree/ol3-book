(function () {
    var layer = new ol.layer.Tile({
        source: new ol.source.OSM()
    });
    var center = ol.proj.transform([-1.812, 52.443], 'EPSG:4326',
        'EPSG:3857');
    var view = new ol.View({
        center: center,
        zoom: 6
    });
    var map = new ol.Map({
        target: 'map',
        layers: [layer],
        view: view
    });
    var overlay = new ol.Overlay({
        element: document.getElementById('overlay'),
        positioning: 'center-left'
    });
    map.on('click', function (event) {
        var coord = event.coordinate;
        var degrees = ol.proj.transform(coord, 'EPSG:3857', 'EPSG:4326')
        var hdms = ol.coordinate.toStringHDMS(degrees);
        var element = overlay.getElement();
        element.innerHTML = hdms;
        overlay.setPosition(coord);
        map.addOverlay(overlay);
    });
    view.on('propertychange', function(e){
        console.log(e);
    });
})();