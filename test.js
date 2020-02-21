function deviceOrientationHandler(e){

  var a = document.getElementById('alpha');
  var b = document.getElementById('beta');
  var g = document.getElementById('gamma');

  a.innerText = e.alpha;
  b.innerText = e.beta;
  g.innerText = e.gamma;
}

if (window.DeviceOrientationEvent) {

  window.addEventListener('deviceorientation', deviceOrientationHandler, false);

}else{

  console.error('Device orientation not supported in this browser.');
}