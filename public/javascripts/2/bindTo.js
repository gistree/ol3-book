(function () {
    // Not Using BindTo
    // Returns a Transform
    var layer = new ol.layer.Tile({
        source: new ol.source.OSM()
    });
    var center = ol.proj.transform([-1.812, 52.443], 'EPSG:4326',
        'EPSG:3857');
    var view = new ol.View({
        center: center,
        zoom: 6
    });
    var map = new ol.Map({
        target: 'map',
        layers: [layer],
        view: view
    });
    var checkbox = document.querySelector('#visible');
    checkbox.addEventListener('change', function () {
        var checked = this.checked;
        if (checked !== layer.getVisible()) {
            layer.setVisible(checked);
        }
    });
    layer.on('change:visible', function () {
        var visible = this.getVisible();
        if (visible !== checkbox.checked) {
            checkbox.checked = visible;
        }
    });
})();