(function () {

    var bingMapsAerial = new ol.layer.Tile({
        source: new ol.source.BingMaps({
            key: 'XEgfovWVKyKMJiExVT4Y~KsdvKQUVjawrSifXp8cgMA~AqHpK9opn7Yca04CZvJuKwX2UPsspcuMtZ431T8a2MOYGgvTFBLG6Lncjpngh-lo',
            imagerySet: 'Aerial'
        })
    });
    bingMapsAerial.set('name', 'Bings Maps Aerial');

    var bingMapsRoad = new ol.layer.Tile({
        source: new ol.source.BingMaps({
            key: 'XEgfovWVKyKMJiExVT4Y~KsdvKQUVjawrSifXp8cgMA~AqHpK9opn7Yca04CZvJuKwX2UPsspcuMtZ431T8a2MOYGgvTFBLG6Lncjpngh-lo',
            imagerySet: 'Road',
            culture: 'fr-FR'
        })
    });
    bingMapsRoad.set('name', 'Bings Maps Road');

    var simpleWMS = new ol.layer.Image({
        opacity: 0.6,
        source: new ol.source.ImageWMS({
            url: 'http://demo.boundlessgeo.com/geoserver/wms',
            params: {
                'LAYERS': 'topp:states'
            },
            extent: [-13884991, -7455066, 2870341, 6338219]
        })
    });
    simpleWMS.set('name', 'USA layer from Geoserver WMS demo');

    var layers = [bingMapsAerial, bingMapsRoad, simpleWMS];

    var map = new ol.Map({
        layers: layers,
        target: 'map',
        view: new ol.View({
            center: ol.proj.transform([-90, 40], 'EPSG:4326', 'EPSG:3857'),
            zoom: 3
        })
    });   
})();