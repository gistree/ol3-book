(function () {
    var wms_layer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: 'http://demo.opengeo.org/geoserver/wms',
            params: {
                'LAYERS': 'ne:ne'
            }
        })
    });
    var view = new ol.View({
        center: [0, 0],
        zoom: 1
    });
    var map = new ol.Map({
        layers: [wms_layer],
        target: 'map',
        view: view
    });
    var viewProjection = view.getProjection();
    var viewResolution = view.getResolution();
    map.on('click', function (evt) {
        var container = document.getElementById('info');
        var url = wms_layer.getSource().getGetFeatureInfoUrl(
            evt.coordinate, viewResolution, viewProjection, {
                'INFO_FORMAT': 'text/javascript',
                'propertyName': 'formal_en'
            });
        if (url) {
            var parser = new ol.format.GeoJSON();
            $.ajax({
                url: url,
                dataType: 'jsonp',
                jsonpCallback: 'parseResponse'
            }).then(function (response) {
                var result = parser.readFeatures(response);
                if (result.length) {
                    var info = [];
                    for (var i = 0, ii = result.length; i < ii; ++i) {
                        info.push(result[i].get('formal_en'));
                    }
                    container.innerHTML = info.join(', ');
                } else {
                    container.innerHTML = '&nbsp;';
                }
            });
        }
    });

})();