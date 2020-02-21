function deviceOrientationHandler(e){

alert(2);

//  var a = document.getElementById('alpha');
 // var b = document.getElementById('beta');
  //var g = document.getElementById('gamma');

//  a.innerText = e.alpha;
 // b.innerText = e.beta;
  //g.innerText = e.gamma;
}

if (window.DeviceOrientationEvent) {
  alert(0);
  window.addEventListener('deviceorientation', deviceOrientationHandler, false);

}else{
  alert(1);
  console.error('Device orientation not supported in this browser.');
}