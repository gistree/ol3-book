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

    var dragAndDrop = new ol.interaction.DragAndDrop({
        formatConstructors: [
            ol.format.GPX,
            ol.format.GeoJSON,
            ol.format.IGC,
            ol.format.KML,
            ol.format.TopoJSON
        ]
    });
    dragAndDrop.on('addfeatures', function (event) {
        var vectorSource = new ol.source.Vector({
            features: event.features,
            projection: event.projection
        });
        map.addLayer(new ol.layer.Vector({
            source: vectorSource,
            style: vectorStyle
        }));
        view.fit(vectorSource.getExtent(), map.getSize());
    });

    var map = new ol.Map({
        renderer: 'canvas',
        target: 'map',
        layers: [tiledRaster],
        view: view
    });
    map.addInteraction(dragAndDrop);

})();