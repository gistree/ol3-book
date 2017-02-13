var express = require('express');
var router = express.Router();
var fs = require('fs');

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
router.get('/7/projection', function (req, res) {
  res.render('projections', {
    title: 'OpenLayers3 Projections'
  });
});
router.get('/7/proj4js', function (req, res) {
  res.render('proj4js', {
    title: 'OpenLayers3 proj4js'
  });
});
router.get('/7/rasterProj', function (req, res) {
  res.render('rasterProj', {
    title: 'OpenLayers3 Raster Projection'
  });
});
router.get('/7/vectorProj', function (req, res) {
  res.render('vectorProj', {
    title: 'OpenLayers3 Vector Projection'
  });
});
router.get('/8/simpleSelect', function (req, res) {
  res.render('8_simple_select', {
    title: 'OpenLayers3 Simple Select'
  });
});
router.get('/8/moreSelect', function (req, res) {
  res.render('8_more_select', {
    title: 'OpenLayers3 More Options for Select'
  });
});
router.get('/8/featureInfo', function (req, res) {
  res.render('8_feature_info', {
    title: 'OpenLayers3 Getting Feature Information'
  });
});
router.get('/8/featureInfoURL', function (req, res) {
  res.render('8_feature_info_url', {
    title: 'OpenLayers3 Getting Feature Information WMS URL'
  });
});
router.get('/8/simpleOverlay', function (req, res) {
  res.render('8_simple_overlay', {
    title: 'OpenLayers3 Simple Overlay'
  });
});
router.get('/8/dynamicOverlay', function (req, res) {
  res.render('8_dynamic_overlay', {
    title: 'OpenLayers3 Dynamic Overlay'
  });
});
router.get('/8/createNew', function (req, res) {
  res.render('8_create_new', {
    title: 'OpenLayers3 Create new Content'
  });
});
router.get('/features.geojson', function (request, response) {
  response.contentType('application/json');
  fs.readFile('public/assets/geojson/features.json', function (err, data) {
    console.log(data);
    response.send(data.toString());
  });
});
router.post('/features.geojson', function (req, resp) {
  resp.contentType('application/json');
  var path = '/home/jokord/Projects/pdm-vila-real/pdm-vilareal-dev/public/assets/geojson/features.json';
  var json = JSON.stringify(req.body, function (k, v) {
    if (typeof v == 'string') {
      var f = parseFloat(v);
      return !isNaN(f) ? f : v;
    }
    return v;
  });

  fs.writeFile(path, json, function (err) {
    var msgOk = 'The file was saved!';
    var msgFail = 'The file was saved!';
    if (err) {
      console.log(err);
      resp.send(msgFail);
    } else {
      console.log(msgOk);
      resp.send(msgOk);
    }
  });
});
router.get('/8/modifyFeatures', function (req, res) {
  res.render('8_modify_features', {
    title: 'OpenLayers3 Modify Features'
  });
});
router.get('/8/defaultInteractions', function (req, res) {
  res.render('8_default_interactions', {
    title: 'OpenLayers3 Default Interactions'
  });
});
router.get('/8/dragrotatezoom', function (req, res) {
  res.render('8_drag_rotate_zoom', {
    title: 'OpenLayers3 DragRotateAndZoom (Shift Key)'
  });
});
router.get('/8/dragbox', function (req, res) {
  res.render('8_drag_box', {
    title: 'OpenLayers3 DragBox'
  });
});
router.get('/9/defaultControls', function (req, res) {
  res.render('9_default_controls', {
    title: 'OpenLayers3 Default Controls'
  });
});
router.get('/9/defaultAttributions', function (req, res) {
  res.render('9_default_attributions', {
    title: 'OpenLayers3 Default Attributions'
  });
});
router.get('/9/mousePosition', function (req, res) {
  res.render('9_finding_mouse_pos', {
    title: 'OpenLayers3 Mouse Position'
  });
});
router.get('/9/scale', function (req, res) {
  res.render('9_scale_line', {
    title: 'OpenLayers3 Scale Line'
  });
});
router.get('/9/zoom_extent', function (req, res) {
  res.render('9_zoom_to_extent', {
    title: 'OpenLayers3 Zoom Extent'
  });
});
router.get('/9/custom_control', function (req, res) {
  res.render('9_custom_control', {
    title: 'OpenLayers3 Custom Control'
  });
});

module.exports = router;