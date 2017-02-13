(function () {

    var popup = new ol.Overlay({
        element: document.getElementById('popup')
    });

    var osmLayer = new ol.layer.Tile({
        source: new ol.source.OSM()
    });

    var ol3_sprint_location = ol.proj.transform([-1.20472, 52.93646],
        'EPSG:4326', 'EPSG:3857');
    var view = new ol.View({
        center: ol3_sprint_location,
        zoom: 16
    });
    var map = new ol.Map({
        target: 'map'
    });
    map.addLayer(osmLayer);
    map.setView(view);
    map.addOverlay(popup);
    popup.setPosition(ol3_sprint_location);

})();