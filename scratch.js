
function testClosure(x) {
	alert("Here 1");
	/* var x = 4;
	var y = 2; */
	function closeX() {
		alert(x);
		a = x * 2;
		alert(a);
		return a;
	}
	return closeX();
	
}

function buildPrompts(p) {
	alert("Here 2");
	alert(p);
	return p;
}

/* */
var x = prompt("Enter a value");

var checkLocalX = testClosure(x);

alert(checkLocalX);

var checkPrompt = buildPrompts(1);

alert("Here 3");
alert(checkPrompt);


