"use strict";

function Weather(cityName, description){
	this.CityName = cityName;
	this.description = description;
	this.temperature = '';
	
}

Object.defineProperty(Weather.prototype, 'temperature', {
	get: Function(){
		return this.temperature;
	},
	set: function(value){
		this._temperature = (value * 1.8 + 32).toFixed(2) + 'F.';
	}
	
});
