var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OpenLayers3' });
});
router.get('/2/components', function(req, res, next) {
  res.render('components', { title: 'OpenLayers3 Components' });
});
router.get('/2/latlng', function(req, res, next) {
  res.render('latlng', { title: 'OpenLayers3 Overlay' });
});
router.get('/2/bindto', function(req, res, next) {
  res.render('bindTo', { title: 'OpenLayers3 BindTo' });
});
router.get('/2/minimap', function(req, res, next) {
  res.render('minimap', { title: 'OpenLayers3 Minimap' });
});
router.get('/3/create_map', function(req, res){
  res.render('create_map', { title: 'OpenLayers3 Minimap' });
});
router.get('/3/target', function(req, res){
  res.render('target', { title: 'OpenLayers3 Target Pratice' });
});

module.exports = router;