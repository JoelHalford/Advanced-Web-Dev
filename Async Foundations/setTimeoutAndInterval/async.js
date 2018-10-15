// setTimeout usage
function callback() {
	console.log("callback function");
}
var delay = 1000;	//delay is in ms
setTimeout(callback, delay);

// with anonymous function
setTimeout(function() {
	console.log("Runs in approx. 2000ms");
}, 2000);

// Canceling setTimeout
var timerId = setTimeout(function() {
	console.log("This function runs in 30 seconds");
}, 30000);

setTimeout(function(){
	console.log("Canceling the first setTimeout", timerId);
	clearTimeout(timerId);
}, 2000);

// setInterval usage
function callback() {
	console.log("callback is called continuously");
}
var repeat = 3000;
setTimeout(callback, repeat);

// example
var num = 0;
setInterval(function() {
	num++;
	console.log("num:", num);
}, 1000);

// canceling setInterval
var num = 0;
var intervalId = setInterval(function() {
	num++;
	console.log("num:", num);
	if(num === 3) {
		clearInterval(intervalId);
	}
}, 1000);