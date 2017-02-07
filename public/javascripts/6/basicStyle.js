(function () {

    var center = ol.proj.transform([0, 0], 'EPSG:4326', 'EPSG:3857');
    var view = new ol.View({
        center: center,
        zoom: 1
    });

    var timezoneStyle = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: [10, 0, 200, 0.5],
        }),
        text: new ol.style.Text({
            font: '20px Verdana',
            text: 'TZ',
            fill: new ol.style.Fill({
                color: [64, 64, 64, 0.75]
            })
        })
    });
    var countryStyle = new ol.style.Style({
        fill: new ol.style.Fill({
            color: [203, 194, 185, 1]
        }),
        stroke: new ol.style.Stroke({
            color: [177, 163, 148, 0.5],
            width: 2
        })
    });

    var countries = new ol.layer.Vector({
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON({
                defaultDataProjection: 'EPSG:3857'
            }),
            url: '../assets/geojson/countries.json'
        }),
        style: countryStyle
    });

    var timezones = new ol.layer.Vector({
        source: new ol.source.Vector({
            format: new ol.format.KML({
                extractStyles: false
            }),
            projection: 'EPSG:3857',
            url: '../assets/kml/timezones.kml'
        }),
        style: timezoneStyle
    });

    var map = new ol.Map({
        target: 'map',
        view: view,
        layers: [countries, timezones]
    });

})();