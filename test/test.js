window.onload = function(){

}

  function Test() {

	alert('Test(0)');
	location.href = "https://whatwebcando.today/device-motion.html";
  }

  function permissionM() {

	if ( location.protocol != "https:" ) {
	location.href = "https:" + window.location.href.substring( window.location.protocol.length );
	}

    // feature detect
	alert('permissionM()');
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      DeviceMotionEvent.requestPermission()
        .then( function(permissionState) {
          if (permissionState === 'granted') {
            window.addEventListener('devicemotion', deviceMotionHandler, false);
          }
        })
        .catch(console.error);
    } else {
      // handle regular non iOS 13+ devices
    }
  }


  function permissionO() {

	if ( location.protocol != "https:" ) {
	location.href = "https:" + window.location.href.substring( window.location.protocol.length );
	}

    // feature detect
	alert('permissionO()');
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      DeviceOrientationEvent.requestPermission()
        .then( function(permissionState) {
          if (permissionState === 'granted') {
            window.addEventListener('deviceorientation', deviceOrientationHandler, false);
          }
        })
        .catch(console.error);
    } else {
      // handle regular non iOS 13+ devices
    }
  }



function deviceMotionHandler(e){

	alert('mh');
  var a = document.getElementById('alpha');
  var b = document.getElementById('beta');
  var g = document.getElementById('gamma');

  a.innerText = e.alpha;
  b.innerText = e.beta;
  g.innerText = e.gamma;
}


function deviceOrientationHandler(e){
	
	alert('oh');
  var a = document.getElementById('alpha');
  var b = document.getElementById('beta');
  var g = document.getElementById('gamma');

  a.innerText = e.alpha;
  b.innerText = e.beta;
  g.innerText = e.gamma;
}
