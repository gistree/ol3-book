(function () {

    var vectorLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: '../assets/geojson/countries.json',
            format: new ol.format.GeoJSON()
        })
    });
    var originalSource = new ol.source.Vector({
        url: '../assets/geojson/cluster.json',
        format: new ol.format.GeoJSON({
            defaultDataProjection: 'ESPG:3857'
        })
    });
    var originalLayer = new ol.layer.Vector({
        source: originalSource
    });
    var clusterSource = new ol.source.Cluster({
        source: originalSource
    });
    var clusterLayer = new ol.layer.Vector({
        source: clusterSource,
    });
    var map = new ol.Map({
        target: 'map',
        layers: [vectorLayer, clusterLayer],
        view: new ol.View({
            center: ol.proj.transform([0, 0], 'EPSG:4326', 'EPSG:3857'),
            zoom: 1,
        })
    });

})();