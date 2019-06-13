"use strict";

searchButton.addEventListener('click', searchWeather);

function searchWeather(){
	var cityName = searchCity.value;
	if(cityName.trim() === 0){
		return alert('Please enter a City Name');
	}
	var http = new XMLHttpRequest();
	var apiKey = '78e74233fb8cb4ae21ca85da73935816';
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + apiKey;
	var method = 'GET';
	
	http.open(method, url);
	http.onreadystatechange = function(){
		if (http.readystate == XMLHttpRequest.DONE && http.status === 200){
			var data = JSON.parse(http.responseText);
			var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
			weatherData.temperature = data.main.temp;
			updateWeather(weatherData);
		} else if (http.readyState === XMLHttpRequest.DONE) {
			alert('Something went wrong');
			
		}
		http.send();
	};
}


function updateWeather(weatherData){
	weatherCity.textContent = weatherData.cityName;
	weatherDescription.textContent = weatherData.description;
	weatherTemperature.textContent = weatherData.temperature;
	
	weatherBox.style.display = 'block';
	
}







