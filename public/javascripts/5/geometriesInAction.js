(function () {
    var tiledRaster = new ol.layer.Tile({
        source: new ol.source.OSM()
    });
    var center = ol.proj.transform([-72.6, 41.7], 'EPSG:4326', 'EPSG:3857');
    var view = new ol.View({
        center: center,
        zoom: 12,
    });
    var fill = new ol.style.Fill({
        color: 'rgba(0,0,0,0.2)'
    });
    var stroke = new ol.style.Stroke({
        color: 'rgba(0,0,0,0.4)'
    });
    var circle = new ol.style.Circle({
        radius: 6,
        fill: fill,
        stroke: stroke
    });
    var vectorStyle = new ol.style.Style({
        fill: fill,
        stroke: stroke,
        image: circle
    });
    var map = new ol.Map({
        target: 'map',
        layers: [tiledRaster],
        view: new ol.View({
            center: ol.proj.transform([0, 0], 'EPSG:4326', 'EPSG:3857'),
            zoom: 1,
        })
    });

    var polygon = new ol.geom.Polygon([
        [
            [-30, -30],
            [-30, 30],
            [30, 30],
            [30, -30],
            [-30, -30]
        ],[
        [-5, 10],
        [5, 10],
        [5, 25],
        [-5, 25],
        [-5, 10]
    ]
    ]);
    polygon.transform('EPSG:4326', 'EPSG:3857');
    var source = new ol.source.Vector({
        features: [new ol.Feature(polygon)],
        projection: 'EPSG:4326'
    });
    var layer = new ol.layer.Vector({
        source: source,
        style: vectorStyle
    });
    map.addLayer(layer);
    var linearRing = new ol.geom.LinearRing([
        [-20, -20],
        [-10, -20],
        [-10, 20],
        [-20, 20]
    ]);
    linearRing.transform('EPSG:4326', 'EPSG:3857');
    polygon.appendLinearRing(linearRing);
    var linearRing = new ol.geom.LinearRing([
        [20, 20],
        [10, 20],
        [10, -20],
        [20, -20]
    ]);
    linearRing.transform('EPSG:4326', 'EPSG:3857');
    polygon.appendLinearRing(linearRing);
})();