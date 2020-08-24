var mathematics = "";
var calculated = "";

function toDaytime(){
	document.body.style.backgroundImage = "url('./static/img/day.jpg')";
	document.getElementById("calculator").style.background = "rgba(255, 255, 255, 0.5)";
	document.getElementById("answer").style.background = "white";
	document.getElementById("display").style.color = "white";
}

function toNighttime(){
	document.body.style.backgroundImage = "url('./static/img/night.jpg')";
	document.getElementById("calculator").style.background = "rgba(0, 0, 0, 0.5)";
	document.getElementById("answer").style.background = "#F5F5F5";
	document.getElementById("display").style.color = "#F5F5F5";
}

window.onload = function(){
	var d = new Date();
	var hour = d.getHours();
	if(hour >= 7 && hour < 19) {
		toDaytime();
	} else {
		toNighttime();
	}
};

function clearMathematics(){
	mathematics = "";
	updateDisplay();
}
function clearCalculated(){
	calculated = "";
	updateAnswer();
}

function allClear(){
	if(mathematics != "") {
		clearMathematics();
	} else {
		clearCalculated();
	}
}

function updateDisplay(){
	document.getElementById("display").innerHTML = mathematics;
}

function updateAnswer(){
	document.getElementById("answer").innerHTML = calculated;
}

function math(x){
	if(mathematics == "" && (x.value == " / " || x.value == " * " || x.value == " + " || x.value == " - ")) {
		if(calculated == "") {
			mathematics = 0 + x.value;
		} else {
			mathematics = calculated + x.value;
		}
	}
	else if(mathematics != "") {
		if(x.value[0] != " " || mathematics.substr(-1) != " ") {
			mathematics += x.value;
		}
	}
	else {
		allClear();
		mathematics += x.value;
	}
	
	updateDisplay();
}

function calculate(){
	calculated = eval(mathematics);
	clearMathematics();
	updateAnswer();
}
