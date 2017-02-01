var sourceBingMaps = new ol.source.BingMaps({
    key: 'XEgfovWVKyKMJiExVT4Y~KsdvKQUVjawrSifXp8cgMA~AqHpK9opn7Yca04CZvJuKwX2UPsspcuMtZ431T8a2MOYGgvTFBLG6Lncjpngh-lo',
    imagerySet: 'Road',
});

var bingMapsRoad = new ol.layer.Tile({
    source: sourceBingMaps
});

var bingMapsAerial = new ol.layer.Tile({
    source: new ol.source.BingMaps({
        key: 'XEgfovWVKyKMJiExVT4Y~KsdvKQUVjawrSifXp8cgMA~AqHpK9opn7Yca04CZvJuKwX2UPsspcuMtZ431T8a2MOYGgvTFBLG6Lncjpngh-lo',
        imagerySet: 'Aerial',
    })
});

var map = new ol.Map({
    layers: [bingMapsRoad, bingMapsAerial],
    target: 'map',
    view: new ol.View({
        center: ol.proj.transform([6.562783, 46.517814], 'EPSG:4326', 'EPSG:3857'),
        zoom: 13
    })
});