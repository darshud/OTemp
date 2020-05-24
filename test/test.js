window.onload = function(){

}

  function permission() {

	if ( location.protocol != "https:" ) {
	location.href = "https:" + window.location.href.substring( window.location.protocol.length );
	}

	// feature detect
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      DeviceMotionEvent.requestPermission()
        .then( function(permissionState) {
          if (permissionState === 'granted') {
            window.addEventListener('devicemotion', deviceMotionHandler, false);
          }
        })
        .catch(console.error);
    } else {
            window.addEventListener('devicemotion', deviceMotionHandler, false);
    }
	  
	  
	// feature detect
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
	    //alert(1);
      DeviceOrientationEvent.requestPermission()
        .then( function(permissionState) {
          if (permissionState === 'granted') {
		  //alert('PG-done');
            window.addEventListener('deviceorientation', deviceOrientationHandler, false);
		  //alert('PO-done');
	  }
	      //alert(2);
        })
        .catch(console.error);
    } else {
    	window.addEventListener('deviceorientation', deviceOrientationHandler, false);
	  //alert('PO-done');
    }
  }


function deviceMotionHandler(evnt){

	var d = document.getElementById('acceleration');
	var e = document.getElementById('accelerationIncludingGravity');
	var f = document.getElementById('rotationRate');
	var g = document.getElementById('interval');
	var g1 = document.getElementById('dtM');

	var p = new Date();
	var q = p.getTime();
	g1.innerText = q;
	
	d.innerText = evnt.acceleration.x; + ' : ' + evnt.acceleration.y + ' : ' + evnt.acceleration.z;
	e.innerText = evnt.accelerationIncludingGravity.x + ' : ' + evnt.accelerationIncludingGravity.y + ' : ' + evnt.accelerationIncludingGravity.z;
	f.innerText = evnt.rotationRate.alpha + ' : ' + evnt.rotationRate.beta + ' : ' + evnt.rotationRate.gamma;
	g.innerText = evnt.interval;
}


function deviceOrientationHandler(e){
	
	var a = document.getElementById('alpha');
	var b = document.getElementById('beta');
	var c = document.getElementById('gamma');
	var c1 = document.getElementById('dtO');

	var p = new Date();
	var q = p.getTime();
	c1.innerText = q;

	a.innerText = e.alpha;
	b.innerText = e.beta;
	c.innerText = e.gamma;		
}
