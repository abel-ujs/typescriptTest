import react = require("react");
import $ = require("jquery");
interface ClockInterface{
	currentTime: Date;
}
class Clock implements ClockInterface{
	stars: string[]=['1','2','3','4','5'];
	currentTime: Date;
	move(){
		console.log(this);
		console.log('currentTime')
		this.stars.map((t) => {
			console.log(t)
		})
	}
}
var clock = new Clock();
clock.move();
console.log($);
$.ajax({
	url: 'typings.json',
	success: function() {
		console.log('success')
	},
	error: function() {
		console.log('error')
	}
})

