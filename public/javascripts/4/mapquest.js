
    var map = new ol.Map({
        target: 'map',
    });
    var view = new ol.View({
        center: ol.proj.transform([-1.8118500054456526, 52.4431409750608], 'EPSG:4326', 'EPSG:3857'),
        zoom: 12
    });

    var osmLayer = new ol.layer.Tile({
        source: new ol.source.OSM()
    });

    var stamenLayer = new ol.layer.Tile({
        source: new ol.source.Stamen({
            layer: 'terrain'
        })
    });

    map.addLayer(osmLayer);
    map.addLayer(stamenLayer);
    map.setView(view);
