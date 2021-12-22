var startTime = 0;
var start = 0;
var end = 0;
var diff = 0;
var timerID = 0;

function chrono(){
	end = new Date();
	diff = end - start;
	diff = new Date(diff);
	var sec = diff.getSeconds();
	var min = diff.getMinutes();
	var hr = diff.getHours()-1;
	if (min < 10){
		min = "0" + min;
	}
	if (sec < 10){
		sec = "0" + sec;
	}
	document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec;
	timerID = setTimeout("chrono()", 100);
}

function chronoStart(){
	start = new Date();
	chrono();
}
function chronoReset(){
	document.getElementById("chronotime").innerHTML = "0:00:00";
	start = new Date()
}
function chronoStop(){
	clearTimeout(timerID);
}

function getRandom(max) {
  return (Math.random() * max) - (max / 2);
}