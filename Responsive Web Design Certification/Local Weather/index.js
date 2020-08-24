window.onload = function(){
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} 
	else{ 
		alert("Geolocation is not supported on this browser.");
	}
};

function showPosition(position) {
	var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + 
		Math.round(position.coords.latitude) + "&lon=" + Math.round(position.coords.longitude);
		
	getAsyncCall(url, outputJson);
}

function getAsyncCall(url, callback){
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			callback(xmlHttp.responseText);
		}
	}
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}

var json;
function outputJson(jsonString){
	var jsonStr = JSON.parse(jsonString);
	document.getElementById("icon").src = jsonStr.weather[0].icon;
	document.getElementById("name").innerHTML = jsonStr.name;
	document.getElementById("tempValueMin").innerHTML = Math.round((jsonStr.main.temp_min * (9/5)) + 32); 
	document.getElementById("tempValueCurrent").innerHTML = Math.round((jsonStr.main.temp * (9/5)) + 32);
	document.getElementById("tempValueMax").innerHTML = Math.round((jsonStr.main.temp_max * (9/5)) + 32);
	document.getElementById("description").innerHTML = "Description: " + jsonStr.weather[0].description;
	setBackground(jsonStr.weather[0].description);
	json = jsonString;
}

function setBackground(str){
	if(str.indexOf('sun') !== -1){
		//downloaded from pexels, uploaded by Skitterphoto.
		document.body.style.backgroundImage = "url('./static/img/sun.jpg')";
	}
	else if(str.indexOf('clear') !== -1){
		//downloaded from pexels, uploaded by John Tekeridis.
		document.body.style.backgroundImage = "url('./static/img/clear.jpg')";
	}
	else if(str.indexOf('rain') !== -1){
		//downloaded from pexels, uploaded by Bibhukalyan Acharya.
		document.body.style.backgroundImage = "url('./static/img/rain.jpg')";
	}
	else if(str.indexOf('cloud') !== -1){
		//downloaded from pexels, uploaded by freestocks.org.
		document.body.style.backgroundImage = "url('./static/img/cloud.jpg')";
	}
	else if(str.indexOf('snow') !== -1){
		//downloaded from pexels, uploaded by freestocks.org.
		document.body.style.backgroundImage = "url('./static/img/snow.jpg')";
	}
	else {
		//downloaded from pexels, uploaded by Francesco Ungaro.
		document.body.style.backgroundImage = "url('./static/img/default.jpg')";
	}
}

function toCelsius(){
	var jsonStr = JSON.parse(json);
	document.getElementById("tempValueMin").innerHTML = Math.round(jsonStr.main.temp_min);
	document.getElementById("tempValueCurrent").innerHTML = Math.round(jsonStr.main.temp);
	document.getElementById("tempValueMax").innerHTML = Math.round(jsonStr.main.temp_max);
}

function toFahrenheit(){
	var jsonStr = JSON.parse(json);
	document.getElementById("tempValueMin").innerHTML = Math.round((jsonStr.main.temp_min * (9/5)) + 32); 
	document.getElementById("tempValueCurrent").innerHTML = Math.round((jsonStr.main.temp * (9/5)) + 32);
	document.getElementById("tempValueMax").innerHTML = Math.round((jsonStr.main.temp_max * (9/5)) + 32);
}
