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
	    //alert(1);
      DeviceOrientationEvent.requestPermission()
        .then( function(permissionState) {
          if (permissionState === 'granted') {
		  //alert('PG-done');
            window.addEventListener('deviceorientation', deviceOrientationHandler, false);
		  //alert('PO-done');
            window.addEventListener('devicemotion', deviceMotionHandler, false);
		  //alert('PM-done');
	  }
	      //alert(2);
        })
        .catch(console.error);
    } else {
	  //alert('PG-done');
    	window.addEventListener('deviceorientation', deviceOrientationHandler, false);
	  //alert('PO-done');
    	window.addEventListener('devicemotion', deviceMotionHandler, false);
	  //alert('PM-done');
    }
  }



function deviceMotionHandler(e){

	var d = document.getElementById('acceleration');
	var e = document.getElementById('accelerationIncludingGravity');
	var f = document.getElementById('rotationRate');
	var g = document.getElementById('interval');
	var g1 = document.getElementById('dtM');
	
	d.innerText = e.acceleration.x + ' : ' + e.acceleration.y + ' : ' + e.acceleration.z;
	e.innerText = e.accelerationIncludingGravity.x + ' : ' + e.accelerationIncludingGravity.y + ' : ' + e.accelerationIncludingGravity.z;
	f.innerText = e.rotationRate.alpha + ' : ' + e.rotationRate.beta + ' : ' + e.rotationRate.gamma;
	g.innerText = e.interval;
	
	var d = new Date();
	var n = d.getTime();
	g1.innerText = n;
}


function deviceOrientationHandler(e){
	
	var a = document.getElementById('alpha');
	var b = document.getElementById('beta');
	var c = document.getElementById('gamma');
	var c1 = document.getElementById('dtO');
	
	a.innerText = e.alpha;
	b.innerText = e.beta;
	c.innerText = e.gamma;	
	
	var d = new Date();
	var n = d.getTime();
	c1.innerText = n;
}

