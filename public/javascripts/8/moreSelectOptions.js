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
    var defaultFrancePoints = new ol.style.Style({
        image: new ol.style.Circle({
            fill: new ol.style.Fill({
                color: 'blue'
            }),
            stroke: new ol.style.Stroke({
                color: '#ffcc00'
            }),
            radius: 8
        })
    });
    var selectFrancePoints = new ol.style.Style({
        image: new ol.style.Circle({
            fill: new ol.style.Fill({
                color: '#ff0000'
            }),
            stroke: new ol.style.Stroke({
                color: '#ffccff'
            }),
            radius: 16
        })
    });

    var vectorEuropa = new ol.layer.Vector({
        id: 'europa',
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON({
                defaultDataProjection: 'EPSG:4326',
                featureProjection: 'EPSG:3857'
            }),
            url: '../assets/geojson/nutsv9_lea.json'
        }),
        style: defaultEuropa
    });
    var vectorFrancePoints = new ol.layer.Vector({
        id: 'france',
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON({
                defaultDataProjection: 'EPSG:4326',
                featureProjection: 'EPSG:3857'
            }),
            url: '../assets/geojson/france_4326.json'
        }),
        style: defaultFrancePoints
    });
    var cachedStyle = {};
    var selectInteraction = new ol.interaction.Select({
        layers: function (layer) {
            return layer.get('selectable') == true;
        },
        style: function (feature) {
            var geometry = feature.getGeometry().getType();
            if (!cachedStyle[geometry]) {
                console.log(geometry);
                if(geometry == 'Point'){
                    cachedStyle['Point'] = selectFrancePoints;
                }else{
                    cachedStyle[geometry] = selectEuropa;
                }
            }
            return [cachedStyle[geometry]];
        }
    });
    var london = ol.proj.transform([-0.12755, 51.507222], 'EPSG:4326', 'EPSG:3857');
    var view = new ol.View({
        center: london,
        zoom: 6
    });
    var map = new ol.Map({
        target: 'map'
    });
    map.addLayer(raster);
    map.addLayer(vectorEuropa);
    map.addLayer(vectorFrancePoints);
    vectorEuropa.set('selectable', true);
    vectorFrancePoints.set('selectable', true);
    map.getInteractions().extend([selectInteraction]);
    map.setView(view);

    window.map = map;

})();