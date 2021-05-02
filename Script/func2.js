var talk = document.getElementById("tarea");
var i;
var txt = "";
var tspeed;
var aud;
//var imageInterval = txt.length * tspeed + 500;
//var newInterval = txt.length * tspeed + imageInterval;
function hideAll(){
	var imageall = document.getElementsByClassName("hiddenimg");
	var l;
	for(l = 0; l < imageall.length; l++){
		imageall[l].style.display = "none";
	}
}
function typing(){
	if(i < txt.length){
		talk.innerHTML += txt.charAt(i);
		i++;
		setTimeout(typing, tspeed);
	}	
}

function loading(){
	talk.innerHTML = "";
	document.getElementById("loading").style.display = "block";
	document.getElementById("loadtxt").style.display = "block";
	aud = document.getElementById("vanvibe");
	aud.play();
	setTimeout(loading2 ,4000);
}
function loading2(){
	document.getElementById("loading").style.display = "none";
	document.getElementById("loadtxt").style.display = "none";
}