var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'OpenLayers3'
  });
});
router.get('/2/components', function (req, res, next) {
  res.render('components', {
    title: 'OpenLayers3 Components'
  });
});
router.get('/2/latlng', function (req, res, next) {
  res.render('latlng', {
    title: 'OpenLayers3 Overlay'
  });
});
router.get('/2/bindto', function (req, res, next) {
  res.render('bindTo', {
    title: 'OpenLayers3 BindTo'
  });
});
router.get('/2/minimap', function (req, res, next) {
  res.render('minimap', {
    title: 'OpenLayers3 Minimap'
  });
});
router.get('/3/create_map', function (req, res) {
  res.render('create_map', {
    title: 'OpenLayers3 Minimap'
  });
});
router.get('/3/target', function (req, res) {
  res.render('target', {
    title: 'OpenLayers3 Target Pratice'
  });
});
router.get('/3/animations', function (req, res) {
  res.render('animations', {
    title: 'OpenLayers3 Animations'
  });
});
router.get('/3/link_views', function (req, res) {
  res.render('link_views', {
    title: 'OpenLayers3 Link Views'
  });
});
router.get('/4/layer', function (req, res) {
  res.render('change_layer_properties', {
    title: 'OpenLayers3 Change Layer Properties'
  });
});
router.get('/4/mapquest', function (req, res) {
  res.render('mapquest', {
    title: 'OpenLayers3 MapQuest'
  });
});
router.get('/4/bing', function (req, res) {
  res.render('bing', {
    title: 'OpenLayers3 Bing'
  });
});
router.get('/4/zoomify', function (req, res) {
  res.render('zoomify', {
    title: 'OpenLayers3 Zoomify'
  });
});
router.get('/4/mashup', function (req, res) {
  res.render('mashup', {
    title: 'OpenLayers3 Mashup'
  });
});
router.get('/4/image-static', function (req, res) {
  res.render('image_static', {
    title: 'OpenLayers3 Image'
  });
});
router.get('/5/vector', function (req, res) {
  res.render('vector', {
    title: 'OpenLayers3 Vector'
  });
});
router.get('/5/cluster', function (req, res) {
  res.render('cluster', {
    title: 'OpenLayers3 Cluster'
  });
});
router.get('/5/kml', function (req, res) {
  res.render('kml', {
    title: 'OpenLayers3 KML Layer'
  });
});
router.get('/5/loader', function (req, res) {
  res.render('loader_function', {
    title: 'OpenLayers3 Server Loader Function'
  });
});
router.get('/5/vectortile', function (req, res) {
  res.render('vectorTile', {
    title: 'OpenLayers3 Vector Tile'
  });
});
router.get('/5/dragndrop', function (req, res) {
  res.render('dragndrop', {
    title: 'OpenLayers3 Drag And Drop'
  });
});
router.get('/5/geometries', function (req, res) {
  res.render('geometries', {
    title: 'OpenLayers3 Geometries'
  });
});
router.get('/5/features', function (req, res) {
  res.render('features', {
    title: 'OpenLayers3 Features'
  });
});
router.get('/6/basic', function (req, res) {
  res.render('basic_style', {
    title: 'OpenLayers3 Basic Style'
  });
});
router.get('/6/fillnstroke', function (req, res) {
  res.render('fillnstroke', {
    title: 'OpenLayers3 Fill & Stroke'
  });
});
router.get('/6/iconstyles', function (req, res) {
  res.render('icon_styles', {
    title: 'OpenLayers3 Icon Styles'
  });
});
router.get('/6/circleStyles', function (req, res) {
  res.render('circle_style', {
    title: 'OpenLayers3 Circle Styles'
  });
});
router.get('/6/multiple', function (req, res) {
  res.render('multiple_style', {
    title: 'OpenLayers3 Multiple Styles'
  });
});
router.get('/6/propertyStyling', function (req, res) {
  res.render('property_style', {
    title: 'OpenLayers3 Property Styling'
  });
});
router.get('/6/overlay', function (req, res) {
  res.render('overlay_style', {
    title: 'OpenLayers3 Overlay Styling'
  });
});

module.exports = router;