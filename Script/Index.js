function wplayer(){
	document.getElementById("pt2").style.display = "none";
	document.getElementById("msally").style.display = "block";
	talk.innerHTML = "";
	txt = "Hello Young Fella. Welcome to Buhbados";
	aud = document.getElementById('mud1');
	aud.play();
	tspeed = 20;
	i = 0;
	typing();
	var imageInterval = txt.length * tspeed + 500;
	setTimeout(function (){
		document.getElementById("wru").style.display = "block";
	}, imageInterval);
}
function tuto1(){
	talk.innerHTML = "";
	hideAll();
	document.getElementById("msally1").style.display = "block";
	document.getElementById("wru").style.display = "none";
	txt = "Them does call muh Mudda Sally, and I hay to look out fuh yuh.";
	aud = document.getElementById("bgvn");
	aud.play();
	aud2 = document.getElementById('mud2');
	aud2.play();
	tspeed = 20;
	i = 0;
	typing();
	var imageInterval = txt.length * tspeed + 500;
	setTimeout(function(){
		document.getElementById("wtg").style.display = "block";
	}, imageInterval);
}
function tuto2(){
	talk.innerHTML = "";
	document.getElementById("wtg").style.display = "none";
	txt = "I would give yuh a tour. But not in this Demo. You look clueless though...";
	aud2 = document.getElementById('mud3');
	aud2.play();
	tspeed = 20;	
	i = 0;
	typing();
	var imageInterval = txt.length * tspeed + 700;
	setTimeout(function (){
		hideAll();
		document.getElementById("gurus").style.display = "block";
	}, imageInterval);
}
function talking1(){
	aud3 = document.getElementById('play1');
	aud3.play();
}
function talking2(){
	aud3 = document.getElementById('play2');
	aud3.play();
}
function talking3(){
	aud3 = document.getElementById('play3');
	aud3.play();
}
function talking4(){
	aud3 = document.getElementById('play4');
	aud3.play();
}
function talking5(){
	aud3 = document.getElementById('play5');
	aud3.play();
}
function talking6(){
	aud3 = document.getElementById('play6');
	aud3.play();
}
function talking7(){
	aud3 = document.getElementById('play7');
	aud3.play();
}
function talking8(){
	aud3 = document.getElementById('play8');
	aud3.play();
}
function talking9(){
	aud3 = document.getElementById('play9');
	aud3.play();
}