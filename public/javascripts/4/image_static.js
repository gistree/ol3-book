// This server does not support CORS, and so is incompatible with WebGL.
//var imgWidth = 8001;
//var imgHeight = 6943;
//var url = 'http://mapy.mzk.cz/AA22/0103/';
//var crossOrigin = undefined;

var imgWidth = 800;
var imgHeight = 551;
var url = '../assets/map.jpg';
var crossOrigin = 'anonymous';

var imgCenter = [imgWidth / 2, imgHeight / 2];

// Maps always need a projection, but Zoomify layers are not geo-referenced, and
// are only measured in pixels.  So, we create a fake projection that the map
// can use to properly display the layer.
var proj = new ol.proj.Projection({
  code: 'ZOOMIFY',
  units: 'pixels',
  extent: [0, 0, imgWidth, imgHeight]
});

var source = new ol.source.ImageStatic({
  attributions: [
    new ol.Attribution({
      html: '&copy; <a href="https://commons.wikimedia.org/wiki/File: 1797 - map - of -Dublin.jpg# Summary ">Wikipedia Commons</a>'
    })
  ],
  url: url,
  imageSize: [imgWidth, imgHeight],
  projection: proj,
  imageExtent: proj.getExtent()
});

var map = new ol.Map({
  layers: [
    new ol.layer.Image({
      source: source
    })
  ],
  target: 'map',
  view: new ol.View({
    projection: proj,
    center: imgCenter,
    zoom: 1
  })
});