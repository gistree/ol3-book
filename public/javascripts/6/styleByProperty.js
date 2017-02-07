(function () {

    var high = [64, 196, 64, 1];
    var mid = [108, 152, 64, 1];
    var low = [152, 108, 64, 1];
    var poor = [196, 32, 32, 1];

    var incomeLevels = {
        'HIC': high, // high income
        'OEC': high, // high income OECD
        'NOC': high, // high income, non-OECD
        'UMC': mid, // upper middle income
        'MIC': mid, // middle income
        'LMC': mid, // lower middle income
        'LIC': low, // low income
        'LMY': low, // low and middle income
        'HPC': poor // heavily indebted poor country
    };

    var defaultStyle = new ol.style.Style({
        fill: new ol.style.Fill({
            color: [250, 250, 250, 1]
        }),
        stroke: new ol.style.Stroke({
            color: [220, 220, 220, 1],
            width: 1
        })
    });

    var styleCache = {};
    function styleFunction(feature, resolution) {
        var level = feature.get('incomeLevel');
        if (!level || !incomeLevels[level]) {
            return [defaultStyle];
        }
        if (!styleCache[level]) {
            styleCache[level] = new ol.style.Style({
                fill: new ol.style.Fill({
                    color: incomeLevels[level]
                }),
                stroke: defaultStyle.stroke
            });
        }
        return [styleCache[level]];
    }

    var source = new ol.source.Vector({
        format: new ol.format.GeoJSON({
            defaultDataProjection: 'EPSG:3857'
        }),
        url: '../assets/geojson/countries.json'
    });
    var countries = new ol.layer.Vector({
        source: source,
        style: styleFunction
    });
    var key = source.on('change', function (event) {
        if (event.target.getState() == 'ready') {
            source.unByKey(key);
            $.ajax('../assets/data/income_levels.json').
            done(function (data) {
                source.forEachFeature(function (feature) {
                    var code = feature.get('iso_a2');
                    if (data[code]) {
                        feature.set('incomeLevel', data[code]);
                    }
                });
            });
        }
    });

    var center = ol.proj.transform([0, 0], 'EPSG:4326', 'EPSG:3857');
    var view = new ol.View({
        center: center,
        zoom: 1
    });

    var map = new ol.Map({
        target: 'map',
        view: view,
        layers: [countries]
    });

})();