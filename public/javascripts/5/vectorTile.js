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
    var tiledSource = new ol.source.VectorTile({
        format: new ol.format.TopoJSON({
            defaultDataProjection: 'EPSG:4326'
        }),
        projection: 'EPSG:3857',
        tileGrid: new ol.tilegrid.createXYZ({
            maxZoom: 19
        }),
        url: 'http://{a-c}.tile.openstreetmap.us/vectiles-water-areas/{z}/{x}/{y}.topojson'
    });

    var tiledVector = new ol.layer.VectorTile({
        source: tiledSource,
        style: vectorStyle
    });

    var map = new ol.Map({
        renderer: 'canvas',
        target: 'map',
        layers: [tiledRaster, tiledVector],
        view: view
    });

})();