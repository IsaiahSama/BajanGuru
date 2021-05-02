var txt = "";
var chat = document.getElementById("parea");
var i = 0;
var tspeed = 70;
var a1;
var bg1 = 'url("divmage/Forestry/tictactoe.png")';

function typing(){
	if(i < txt.length){
		chat.innerHTML += txt.charAt(i);
		i++;
		setTimeout(typing, tspeed);
	}	
}
function ttchk(){
	chat.innerHTML = "";
	i = 0;
	tspeed = 60;
	a1 = txt.length * tspeed + 1500;
}
function udate(){
	a1 = a1 + 3000;
}

function areachk1(){
	setTimeout(areachk, 1000);
}
function areachk(){
	txt = "Beware Green Monkeys? Are they really that much of a threat?";
	ttchk();
	typing();
	setTimeout(function(){
		txt = "Mhm? That one does look rather suspicious.";
		ttchk();
		typing();
		udate();
		setTimeout(function (){
			txt = "OI... YOU RESPONSIBLE FOR TAKING THE GURU OF WONDER'S SOUSE";
			ttchk();
			typing();
			udate();
			setTimeout(function (){
				txt = "I take that as a yes... Alright... What do I have to do to get it back?";
				ttchk();
				typing();
				udate();
				setTimeout(function(){
					document.getElementById("background").style.backgroundImage = bg1;
					txt = "You don't mean... A tictactoe Challenge?";
					ttchk();
					typing();
					udate();
					setTimeout(function (){
						txt = "Fine then... If that's how it must be. I accept";
						ttchk();
						typing();
						udate();
						setTimeout(function (){
								document.getElementById("background").style.backgroundImage= 'url("divmage/forbg.jpg")';
								var win = document.getElementById("tac");
								win.style.display = "block";
								setTimeout(function (){
										txt = "There... I have won";
										ttchk();
										win.style.display = "none";
										typing();
										udate();
										setTimeout(function (){
											window.location.href = "index.html";
										}, a1);
								}, a1);
						}, a1);
				}, a1);
			}, a1);
		}, a1);
	}, a1);
}, a1);
}
