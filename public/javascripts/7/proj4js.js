(function () {

    var test_proj = proj4('EPSG:4326');
    console.log(test_proj);

    proj4.defs("EPSG:27493", "+proj=tmerc +lat_0=39.66666666666666 +lon_0=-8.131906111111112 +k=1 +x_0=180.598 +y_0=-86.98999999999999 +ellps=intl +towgs84=-223.237,110.193,36.649,0,0,0,0 +units=m +no_defs");

    var test_proj2 = proj4('EPSG:27493');
    console.log(test_proj2);

    var projection = ol.proj.get('EPSG:27493');
    projection.setExtent([-127101.82, -300782.39, 160592.41, 278542.12]);
    console.log(projection);

    var c = ol.proj.transform([22183.24, - 12543.10], projection, 'EPSG:4326');
    console.log(c);
})();