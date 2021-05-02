var talk = document.getElementById('tarea');
var guru = document.getElementById("guruman");
var guru2 = document.getElementById("gurutru");	
var sguru = document.getElementById("sadgurut");
var ething = document.getElementById("everything");
var wildres = document.getElementById("wlres");
var forbg = document.getElementById("bgfor");
var i;
var tspeed;
var txt = "";
var tp1;
var a1;
var a2 = a1 + (a1/2);

function begin(){
	guru.style.display = "block";
	txt = "Now... I is a bit hungry ya see... And I craving some souse. You get muh...";
	talk.style.display = "block";
	ttchk();
	typing();
	setTimeout(questa , a1);
}
//Quests
function questa(){
	hideAll();
	sguru.style.display = "block";
	txt = "Exactly... A Green Monkey stole my souse and I would like it back. I'll give you something good";
	ttchk();
	typing();
	setTimeout(function (){
		document.getElementById("q1").style.display = "block";
	}, a1);	
}
function quest1(){
	document.getElementById("q1").style.display = "none";
	txt = "Yes... Mischievous creatures they are. Always up to no good.";
	ttchk();
	typing();
	setTimeout(function (){
		document.getElementById("q2").style.display = "block";
	}, a1);
}
function quest1a(){
	document.getElementById("q2").style.display = "none";
	hideAll();
	guru.style.display = "block";
	txt = "Good. So your task is simple. Retrieve my souse from that Monkey. You'll know it when you see it."
	ttchk();
	typing();
	setTimeout(function(){
		document.getElementById("q3").style.display = "block";
	}, a1);
}
function quest2(){
	document.getElementById("q3").style.display = "none";
	hideAll();
	guru2.style.display = "block";
	txt = "I'm glad you agreed so easily. Go Ahead now... This bus will guide you";
	ttchk();
	typing();
	setTimeout(function(){
		hideAll();
		guru.style.display = "block";
		setTimeout(function(){
			hideAll();
			loading();
			setTimeout(function(){
				document.getElementById('q4').style.display = "block";
				wildres.style.display = "block";
			}, 5000);
		}, a2);
	}, a1);
}
function quest3(){
	document.getElementById("q4").innerHTML = "Well... Here I go";
	setTimeout(quest3a, 3000);
}	
function quest3a(){
	document.getElementById("q4").style.display = "none";
	window.location.href = "forest1.html";
}
function resume(){
	ething.style.display = "block";
}

//Ending Stage
function reeib(){
	talk.innerHTML = "";
	txt = "Heh heh... I'm glad you enjoyed my task";
	i = 0;
	tspeed = 75;
	var a1 = txt.length * tspeed + 700;
	typing();
	setTimeout(edemo, a1);
}
function reeia(){
	talk.innerHTML = "";
	hideAll();
	guru2.style.display = "block";
	txt = "It was wasn't it. There is alot more where that came from. Another time tho... In the full game of course";
	i = 0;
	tspeed = 75;
	var a1 = txt.length * tspeed + 700;
	typing();
	setTimeout(edemo, a1);
}
function edemo(){
	ething.style.display = "none";
	document.getElementById("bai").style.display = "block";
}
	