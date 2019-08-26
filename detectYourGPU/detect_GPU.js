var canvas = document.getElementById("canvas");
var gl = canvas.getContext("experimental-webgl");
var renderInfo = gl.getExtension("WEBGL_debug_renderer_info");
if (renderInfo != null) {
  var vendor = gl.getParameter(renderInfo.UNMASKED_VENDOR_WEBGL);
  var renderer = gl.getParameter(renderInfo.UNMASKED_RENDERER_WEBGL);
  document.getElementById("GPU").innerHTML = renderer + " , by " + vendor
}
