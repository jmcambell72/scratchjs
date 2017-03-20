function testClosure() {
	var x = 4;
	function closeX() {
		return x;
	}

	return closeX;
}


function warningMaker(obstacle) {
  return function() {
    alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
  };
}


function testAlert() { 
	alert("Hello")

	}


warningMaker("Wood");
console.log(warningMaker);

testAlert();
