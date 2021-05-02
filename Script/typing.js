var tspeed;
var txt = "";
var i;

//document.getElementById("talka")	
var talk = document.getElementById("talka");
	
function b4type(){
	aud = document.getElementById("yow");
	talk.style.display = "block";
	document.getElementById("ded").style.display = "none";
	aud.play();
	i = 0;
	txt = "Yow....";
	tspeed = 60;
	typing();
	var imageInterval = txt.length * tspeed + 200;
	setTimeout(intro1, imageInterval);
}

function intro1(){
	txt = "Yow, You, in de back, It's time to wake up";
	i = 0;
	tspeed = 50;
	talk.innerHTML = "";
	typing();
	var imageInterval = txt.length * tspeed + 200;
	setTimeout(intro2, imageInterval);
}

function intro2(){
	txt = "We hay...";
	i = 0;
	tspeed = 200;
	talk.innerHTML = "";
	typing();
	var imageInterval = txt.length * tspeed + 200;
	setTimeout(intro3, imageInterval);
}
function intro3(){
	txt = "Welcome to the Capital of Barbados, Welcome, to Bridgetown"
	i = 0;
	tspeed = 50;
	talk.innerHTML = "";
	typing();
	setTimeout(loading , 5000);
	setTimeout(function (){
		document.getElementById("pt2").style.display = "block";
	}, 9000);
}

