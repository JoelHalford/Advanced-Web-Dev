// Print Array Values Double
var arr = [1,2,3,4,5,6];

function double(arr) {
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i] * 2);
	}
}

double(arr);

// Using forEach
var arr = [1,2,3,4,5,6];

forEach(arr, function(number) {
	console.log(number * 2);
});

// forEach with all callback parameters
var strings = ["my", "forEach", "example"];

var result = "";
// 						  my     0    strings
forEach(strings, function(str, index, array) {
	if (array.length - 1 !== index) {
		result += str + " ";
	} else {
		result += str + "!!!";
	}
});

// forEach function definition
function forEach(array, callback) {
	for (var i = 0; i < arr.length; i++) {
//invoke callback with element, index and array.
		callback(arr[i], i, arr);
	}
}