var talk = document.getElementById("talka");
var i;
var txt = "";
var tspeed;
var aud;
var aud2;
var aud3;
var a1;
//var imageInterval = txt.length * tspeed + 500;
//var newInterval = txt.length * tspeed + imageInterval;
function hideAll(){
	var imageall = document.getElementsByClassName("hiddenimg");
	var i;
	for(i = 0; i < imageall.length; i++){
		imageall[i].style.display = "none";
	}
}
function typing(){
	if(i < txt.length){
		talk.innerHTML += txt.charAt(i);
		i++;
		setTimeout(typing, tspeed);
	}	
}
function ttchk(){
	talk.innerHTML = "";
	i = 0;
	tspeed = 70;
	a1 = txt.length * tspeed + 550;
}
function loading(){
	talk.innerHTML = "";
	document.getElementById("loading").style.display = "block";
	document.getElementById("loadtxt").style.display = "block";
	aud = document.getElementById("vanvibe");
	aud.play();
	setTimeout(loading2, 4500);
}
function loading2(){
	document.getElementById("loading").style.display = "none";
	document.getElementById("loadtxt").style.display = "none";
}