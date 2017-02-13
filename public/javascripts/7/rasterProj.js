(function () {

    proj4.defs("EPSG:2154", "+proj=lcc+lat_1=49+lat_2=44+lat_0=46.5+lon_0=3+x_0=700000+y_0=6600000+ellps=GRS80+towgs84=0,0,0,0,0,0,0+units=m+no_defs");
    var extent = [-378305.81, 6093283.21, 1212610.74, 7186901.68];
    var projection = ol.proj.get('EPSG:2154');
    projection.setExtent(extent);

    var layers = [new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://geoservices.brgm.fr/geologie',
            attributions: [new ol.Attribution({
                html: '&copy; ' +
                    'BRGM (French USGS equivalent)'
            })],
            params: {
                'LAYERS': 'SCAN_F_GEOL1M',
                'VERSION': '1.1.1'
            },
            extent: extent
        })
    })];

    var map = new ol.Map({
        layers: layers,
        target: 'map',
        view: new ol.View({
            projection: projection,
            center: [495520.187986, 6587896.855407],
            zoom: 2
        })
    });

})();