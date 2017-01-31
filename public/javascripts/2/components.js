(function () {

    var layer = new ol.layer.Tile({
        source: new ol.source.OSM()
    });

    var myInteraction = new ol.interaction.DragRotateAndZoom();
    var interactions = ol.interaction.defaults().extend([myInteraction]);
    
    var myControl = new ol.control.FullScreen();
    var controls = ol.control.defaults().extend([myControl]);

    var center = ol.proj.transform([-1.812, 52.443], 'EPSG:4326', 'EPSG:3857');
    var overlay = new ol.Overlay({
        position: center,
        element: document.getElementById('overlay')
    });
    var view = new ol.View({
        center: center,
        zoom: 6
    });
    
    var map = new ol.Map({
        target: 'map',
        layers: [layer],
        interactions: interactions,
        controls: controls,
        overlays: [overlay],
        view: view
    });
})();