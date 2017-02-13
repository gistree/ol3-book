(function () {

    proj4.defs("EPSG:2154", "+proj=lcc+lat_1=49+lat_2=44+lat_0=46.5+lon_0=3+x_0=700000+y_0=6600000+ellps=GRS80+towgs84=0,0,0,0,0,0,0+units=m+no_defs");
    var extent = [-378305.81, 6093283.21, 1212610.74, 7186901.68];
    var projection = ol.proj.get('EPSG:2154');
    projection.setExtent(extent);

    var countriesSource = new ol.source.Vector({
        format: new ol.format.GeoJSON({
            featureProjection: 'EPSG:2154',
        }),
        url: '../assets/geojson/nutsv9_lea.geojson'
    });
    countriesSource.once('change', function (evt) {
        if (this.getState() == 'ready') {
            console.log(this.getFeatures()[0].getGeometry().getCoordinates());
            console.log(this.getFeatures()[0].getGeometry().clone().transform('EPSG:2154', 'EPSG:4326').getCoordinates());
        }
    });
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
        }),
        new ol.layer.Vector({
            source: countriesSource
        })
    ];

    var map = new ol.Map({
        layers: layers,
        target: 'map',
        view: new ol.View({
            projection: projection,
            center: [495520.187986, 6587896.855407],
            zoom: 2
        })
    });
    var geojson = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [-0.944824, 46.134170],
                        [-0.944824, 48.312428],
                        [4.438477, 48.312428],
                        [4.438477, 46.134170],
                        [-0.944824, 46.134170]
                    ]
                ]
            }
        }]
    };
    var format = new ol.format.GeoJSON({
        defaultDataProjection: 'EPSG:4326'
    });
    var features = format.readFeatures(geojson, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:2154'
    });
    console.log("FEATURES");
    console.log(features);
    console.log(".......");
    var bbox = new ol.layer.Vector({
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON
        })
    })
    bbox.getSource().addFeatures(features);
    map.addLayer(bbox);

    console.log(features);
    console.log(
        format.writeFeatures(features, {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:2154'
        })
    );

})();