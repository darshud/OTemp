window.onload = function(){

}

  function permission() {

	if ( location.protocol != "https:" ) {
	location.href = "https:" + window.location.href.substring( window.location.protocol.length );
	}

	// feature detect
//    if (typeof DeviceMotionEvent.requestPermission === 'function') {
//      DeviceMotionEvent.requestPermission()
//        .then( function(permissionState) {
//          if (permissionState === 'granted') {
//            window.addEventListener('devicemotion', deviceMotionHandler, false);
//          }
//        })
//        .catch(console.error);
//    } else {
//      // handle regular non iOS 13+ devices
//    }
	  
	  
	// feature detect
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
	display(e);	
}


function deviceOrientationHandler(e){
	display(e);	
}


function display(e){

	var a = document.getElementById('alpha');
	var b = document.getElementById('beta');
	var c = document.getElementById('gamma');
	
	a.innerText = e.alpha;
	b.innerText = e.beta;
	c.innerText = e.gamma;
	

	var d = document.getElementById('acceleration');
	var e = document.getElementById('accelerationIncludingGravity');
	var f = document.getElementById('rotationRate');
	var g = document.getElementById('interval');
	
	d.innerText = e.acceleration;
	e.innerText = e.accelerationIncludingGravity;
	f.innerText = e.rotationRate;
	g.innerText = e.interval;

}
