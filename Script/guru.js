var nimageInterval;
var ultresp = document.getElementsByClassName("respchk");
function guru1(){
	document.getElementById("gurus").style.display = "none";
	talk.innerHTML = "";
	txt = "That's fine. Fuh now, I gine take yuh to meet someone who will teach you more";
	tspeed = 40;
	i = 0;
	aud = document.getElementById('mud4');
	aud.play();
	typing();
	var imageInterval = txt.length * tspeed + 500;
	document.getElementById('msally').style.display = "block";
	setTimeout(function (){
		document.getElementById('gurus1').style.display = "block";
	}, imageInterval);
}
function guru1a(){
	aud = document.getElementById("bgvn");
	var imageInterval = txt.length * tspeed + 500;
	var newInterval = txt.length * tspeed + (imageInterval * 3 );
	document.getElementById("gurus1").style.display = "none";
	talk.innerHTML = "";
	txt = "Just folluh muh";
	tspeed = 100;
	i = 0;
	typing();
	aud.pause();
	setTimeout(function() {
		hideAll();
		loading();
	}, imageInterval);
	setTimeout(function ab1() {
		document.getElementById("msally1").style.display = "block";
		txt = "We hay. This is a Bajan Rumshop. Just go in and ask for Errol.";
		talk.innerHTML = "";
		tspeed = 20;
		aud = document.getElementById('mud5');
		aud.play();
		i = 0;
		typing();
		nimageInterval = imageInterval + 1500;
		setTimeout(function ab(){
			hideAll();
			document.getElementById('rumshop').style.display = "block";
			talk.innerHTML = "";
			document.getElementById("gurus2").style.display = "block";
		}, nimageInterval);
	}, newInterval);
}
function guru2(){
	var newInterval = txt.length * tspeed + imageInterval;
	document.getElementById('gurus2').style.display = "none";
	aud = document.getElementById("heyyou");
	aud.play()
	talk.innerHTML = "";
	txt = "Heh heh. Looking fuh muh?";
	i = 0;
	tspeed = 40;
	var imageInterval = txt.length * tspeed + 2000;
	typing();
	setTimeout(function (){
		document.getElementById("gurus3").style.display = "block";
	}, imageInterval);
}
function guru3(){
	document.getElementById("gurus3").style.display = "none";
	hideAll();
	document.getElementById("guruman").style.display = "block";
	talk.innerHTML = "";
	txt = "Mudda Sally? Dat fine young ting. Well she sent you to the right person.";
	aud = document.getElementById('mano2');
	aud.play();
	i = 0;
	tspeed = 50;
	var imageInterval = txt.length * tspeed + 500;
	var newInterval = txt.length * tspeed + imageInterval;
	typing();
	setTimeout(function (){
		document.getElementById("gurus4").style.display = "block";
	}, imageInterval);
}
function guru4(){
	var imageInterval = txt.length * tspeed + 500;
	document.getElementById("gurus4").style.display = "none";
	talk.innerHTML = "";
	txt = " Me? I am the Bajan Guru of Wonduh. I know evuhything and I am going to want yuh to do something for muh heh heh";
	i = 0;
	aud = document.getElementById('mano3');
	aud.play();
	tspeed = 70;
	var imageInterval = txt.length * tspeed + 500;
	typing();
	setTimeout(function (){
		document.getElementById("gurus5").style.display = "block";
	}, imageInterval);
}
function guru5(){
	document.getElementById("gurus5").style.display = "none";
	talk.innerHTML = "";
	txt = "Here have a seat";
	i = 0;
	aud = document.getElementById('mano4');
	aud.play();
	tspeed = 200;
	hideAll();
	document.getElementById("guru2").style.display = "block";
	var imageInterval = txt.length * tspeed + 550;
	typing();
	setTimeout(function (){
		document.getElementById("gurus6").style.display = "block";
	}, imageInterval);
}
function guru6(){
	hideAll();
	document.getElementById("gurus6").style.display = "none";
	document.getElementById("guruman").style.display = "block";
	talk.innerHTML = "";
	txt = "Good Good... Ready?";
	i = 0;
	aud = document.getElementById('mano5');
	aud.play();
	tspeed = 40;
	typing();
	var imageInterval = txt.length * tspeed + 550;
	setTimeout(function(){
		for(l = 0; l < ultresp.length; l++){
	ultresp[l].style.display = "block";
		}
	}, imageInterval);
}
function goodman(){
	talk.innerHTML = "";
	for(l = 0; l < ultresp.length; l++){
	ultresp[l].style.display = "none";
	}
	txt = "Yuh is a good person. Now listen tuh muh close.";
	i = 0;
	tspeed = 45;
	aud = document.getElementById('mano6');
	aud.play();
	typing();
	var imageInterval = txt.length * tspeed + 1500;
	var newInterval = txt.length * tspeed + imageInterval + 100;
	setTimeout(function(){
		document.getElementById("guruman").style.display = "none";
		loading();
		setTimeout(function q(){
			window.location.href = "quest1.html";
		}, newInterval);
	}, imageInterval);
}
function sisir(){
	talk.innerHTML = "";
	txt = "Good Good... Glad yuh excited";
	i = 0;
	aud = document.getElementById('mano5');
	aud.play();
	tspeed = 20;
	typing();
	var imageInterval = txt.length * tspeed + 800;
	for(t = 0; t < ultresp.length; t++){
	ultresp[t].style.display = "none";
		}
	setTimeout(goodman, imageInterval);
}
function nosir(){
	talk.innerHTML = "";
	txt = "Eh? Yea? Ok ok, No need tuh rush a Old Man";
	i = 0;
	tspeed = 20;
	aud = document.getElementById('mano5');
	aud.play();
	typing();
	for(t = 0; t < ultresp.length; t++){
	ultresp[t].style.display = "none";
		}
	var imageInterval = txt.length * tspeed + 800;
	setTimeout(goodman, imageInterval);
}
	