var express = require('express');
var router = express.Router();

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
router.get('/3/animations', function(req, res){
  res.render('animations', { title: 'OpenLayers3 Animations' });
});
router.get('/3/link_views', function(req, res){
  res.render('link_views', { title: 'OpenLayers3 Link Views' });
});
router.get('/4/layer', function(req, res){
  res.render('change_layer_properties', { title: 'OpenLayers3 Change Layer Properties' });
});
router.get('/4/mapquest', function(req, res){
  res.render('mapquest', { title: 'OpenLayers3 MapQuest' });
});
router.get('/4/bing', function(req, res){
  res.render('bing', { title: 'OpenLayers3 Bing' });
});
router.get('/4/zoomify', function(req, res){
  res.render('zoomify', { title: 'OpenLayers3 Zoomify' });
});
router.get('/4/mashup', function(req, res){
  res.render('mashup', { title: 'OpenLayers3 Mashup' });
});
router.get('/4/image-static', function(req, res){
  res.render('image_static', { title: 'OpenLayers3 Image' });
});

module.exports = router;