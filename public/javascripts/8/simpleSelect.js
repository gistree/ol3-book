(function () {
    var raster = new ol.layer.Tile({
        source: new ol.source.Stamen({
            layer: 'terrain'
        })
    });
    var selectEuropa = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#ff0000',
            width: 2
        })
    });
    var defaultEuropa = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#0000ff',
            width: 2
        })
    });
    var vectorEuropa = new ol.layer.Vector({
        id: 'europa',
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON({
                defaultDataProjection:'EPSG:4326',
                featureProjection: 'EPSG:3857'
            }),
            url: '../assets/geojson/nutsv9_lea.json'
        }),
        style: defaultEuropa
    });
    var selectInteraction = new ol.interaction.Select({
        condition: ol.events.condition.doubleClick,
        toggleCondition: ol.events.condition.shiftKeyOnly,
        layers: function (layer) {
            return layer.get('id') == 'europa';
        },
        style: selectEuropa
    });
    var london = ol.proj.transform([-0.12755, 51.507222], 'EPSG:4326', 'EPSG:3857');
    var view = new ol.View({
        center: london,
        zoom: 6
    });
    var map = new ol.Map({
        target: 'map',
        interactions: [selectInteraction]
    });
    map.addLayer(raster);
    map.addLayer(vectorEuropa);
    map.setView(view);
    //map.getInteractions().extend();
})();