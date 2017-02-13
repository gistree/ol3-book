(function () {

    var raster = new ol.layer.Tile({
        source: new ol.source.OSM()
    });
    var source = new ol.source.Vector({
        format: new ol.format.GeoJSON({
            defaultDataProjection: 'EPSG:3857',
            featureProjection: 'EPSG:3857'
        }),
        url: '/features.geojson'
    });
    var vector = new ol.layer.Vector({
        id: 'vector',
        source: source,
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 255, 255, 0.2)'
            }),
            stroke: new ol.style.Stroke({
                color: '#ffcc33',
                width: 2
            }),
            image: new ol.style.Circle({
                radius: 7,
                fill: new ol.style.Fill({
                    color: '#ffcc33'
                })
            })
        })
    });
    var map = new ol.Map({
        layers: [raster, vector],
        target: 'map',
        view: new ol.View({
            center: [-11000000, 4600000],
            zoom: 4
        })
    });

    var typeSelect = document.getElementById('type');

    function addInteraction() {
        draw = new ol.interaction.Draw({
            source: source,
            type: typeSelect.value
        });
        map.addInteraction(draw);
    }
    typeSelect.onchange = function (e) {
        map.removeInteraction(draw);
        addInteraction();
    };
    addInteraction();

    vector.getSource().on('addfeature',
        function (evt) {
            var parser = new ol.format.GeoJSON();
            var features = source.getFeatures();
            var featuresGeoJSON = parser.writeFeatures(features);
            $.ajax({
                url: '/features.geojson',
                type: 'POST',
                contentType: 'application/json; charset=utf-8',
                data: featuresGeoJSON
            }).then(function (response) {
                console.log(response);
            });
        }, this);
})();