(function () {

    var blueMarbleLayer = new ol.layer.Image({
        opacity: 0.6,
        source: new ol.source.ImageWMS({
            url: 'http://demo.boundlessgeo.com/geoserver/wms',
            params: {
                'TILED': true,
                'VERSION': '1.1.1',
                'LAYERS': 'bluemarble',
                'FORMAT': 'image/jpeg'
            },
            extent: [-13884991, -7455066, 2870341, 6338219]
        })
    });
    var view = new ol.View({
        projection: 'EPSG:4326',
        center: [-1.81185, 52.44314],
        zoom: 6
    });
    var map = new ol.Map({
        target: 'map'
    });
    map.addLayer(blueMarbleLayer);
    map.setView(view);

})();