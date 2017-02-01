
    var osmLayer = new ol.layer.Tile({
        source: new ol.source.OSM(),
        opacity: 0.6,
        brightness: 0.2
    });
    var view = new ol.View({
        center: ol.proj.transform([-1.8118500054456526,
            52.4431409750608
        ], 'EPSG:4326', 'EPSG:3857'),
        zoom: 6
    });
    var map = new ol.Map({
        target: 'map'
    });
    map.addLayer(osmLayer);
    map.setView(view);

    //Write in console
    /* 
        console.log(osmLayer.getSource());
        
        osmLayer.setProperties({opacity: 0.4, contrast:0.6});
        console.log(osmLayer.get('contrast'));
        console.log(osmLayer.get('opacity'));
    
        osmLayer.setProperties({opacity: 0.7, contrast:0.3});
        console.log(osmLayer.getOpacity());
        console.log(osmLayer.getContrast());

        osmLayer.set('opacity',1);
        osmLayer.setContrast(1);
        osmLayer.setBrightness(0);
        osmLayer.set('myId', 'myUnique');
        console.log(osmLayer.get('myId'));

        Só existe o set Opacity, o resto tem que ser com o setProperties
    
    */