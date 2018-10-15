// promise resolve
var p1 = new Promise(function(resolve, reject) {
	resolve([1,2,3,4]);
});

p1.then(function(arr) {
	console.log("Promise p1 resolve with data:", arr);
});

// promise reject
var p1 = new Promise(function(resolve, reject) {
	reject("ERROR");
});

p1.then(function(data) {
	console.log("Promise p1 resolve with data:", data);
}).catch(function(data){
	console.log("Promise p1 was rejected with data:", data);
});

// promise resolve/reject
var p1 = new Promise(function(resolve, reject){
	var num = Math.random();
	if(num < 0.5){
		resolve(num);
	} else {
		reject(num);
	}
});

p1.then(function(result) {
	console.log("Success:", result);
}).catch(function(error){
	console.log("Error:", error);
});

// wrap setTimeout with promise
var p1 = new Promise(function(resolve, reject){
	setTimeout(function() {
		var randomInt = Math.floor(Math.random() * 10);
		resolve(randomInt);
	}, 4000);
});

promise.then(function(data) {
	console.log("Random int passed to resolve:", data);
});