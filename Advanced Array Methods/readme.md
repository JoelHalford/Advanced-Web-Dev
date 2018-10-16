# forEach
* Iterates through an array
* Runs a callback function on each value in the array
* Returns 'undefined'
forEach ALWAYS returns undefined

function forEach(array, callback){
	for(var i = 0; i < array.length; i++) {
		callback(array[i], i, array);
	}
}

function halfValues(arr){
	var newArr = [];
	arr.forEach(function(val){
		newArr.push(val / 2);
	});
	return newArr;
}

halfValues([2,4,6]); //[1,2,3]


# MAP
* Creates a new array
* Iterates through an array
* Runs a callback function for each value in the array
* Adds the result of that callback function to the new array
* Returns the new array
* Map ALWAYS returns a new array of the SAME length

var arr = [1,2,3];
arr.map(function(value, index, array){
	return value * 2;
});
<!-- [2,4,6] -->

* What map looks like

function map(function(array, callback){
	var newArr = [];

	for (var i = 0; i < array.length; i++)
	{
		newArr.push(callback(arr[i], i, array));
	}
	return newArr;
})

* Using map in a function

function tripleValues(arr){
	return arr.map(function(value){
		return value * 3;
	});
}

tripleValues([1,2,3]); //[3,6,9]

# FILTER
* Creates a new array
* Iterates through an array
* Runs a callback function for each value in the array
* If the callback function returns true, that value will be added to the new array
* If the callback function returns false, that value will be ignored from the new array
* The result of the callback will ALWAYS be a boolean

* How it works

function filter(array, callback){
	var newArr = [];
	for(var i = 0; i < array.length; i++) {
		if (callback(array[i], i, array)){
			newArr.push(array[i]);
		}
	}
	return newArr;
}

* Example 1

var arr = [1,2,3];

arr.filter(function(value, index, array){
	//no need for an if statement
	//just return an expression
	//that evaluates to true or false
	return value > 2;
});

* Example 2 [Using filter in a function]

function onlyFourLetterNames(arr){
	return arr.filter(function(value){
		return value.length === 4;
	});
}

onlyFourLetterNames(["Rusty", "Matt", "Moxie", "Colt"]); // ['Matt', 'Colt']

# Some
* Iterates through an array
* Runs a callback on each value in array
* If the callback returns true for at least one single value, return true
* Otherwise, return false
* The result of the callback will ALWAYS be a boolean

* How it works

function some(array, callback){
	for (var i = 0; i < array.length; i++){
		if (callback(array[i], i, array)){
			return true;
		}
	}
	return false;
}

* Example

var arr = [1,2,3];

arr.some(function(value, index, array){
	return value < 2;
});
<!-- true -->

* Using SOME in a function 1

function hasEvenNumber(arr){
	return arr.some(function(value){
		return value % 2 === 0;
	});
}
hasEvenNumber([1,2,3,4]); //true
hasEvenNumber([1,3,5]);   //false

* Using SOME in a function 2

function hasComma(str){
	return str.split('').some(function(value){
		return value === ',';
	});
}
hasComma('This is wonderful');  //false
hasComma('This, is wonderful'); //true

# Every
* Iterates through an array
* Runs a callback on each value in array
* If the callback returns false for any single value, return false
* Otherwise, return true
* ALWAYS evaluated as a boolean

* How it works

function every(array, callback){
	for (var i = 0; i < array.length; i++){
		if (callback(array[i], i, array) === false){
			return false;
		}
	}
	return true;
}

* Example

var arr = [-1,-2,-3];
arr.every(function(value, index, array){
	return value < 0;
});
<!-- true -->

* Using every in a function 1

function allLowerCase(str){
	return str.split('').every(function(value){
		return value === value.toLowerCase();
	});
}
allLowerCase('this is really nice'); //true
allLowerCase('this is Really nice'); //false

* Using every in a function 2

function allArrays(arr){
	return arr.every(Array.isArray);
}
allArrays([1], [2], [3,4]); //true
allArrays([[1], [2], {}]);  //false

# Reduce
* Accepts a callback function and an optional second parameter
* Iterates through an array
* Runs a callback on each value in the array
* The first parameter to the callback is either the first value in the array or the optional second parameter
* The first parameter to the callback is often called "accumulator"
* The return value from the callback becomes the new value of accumulator
* Whatever is returned from the callback function, becomes the new value of the accumulator!

Array  Method  Callback First value	second value
			   Function or optional	or first if
			   			  second	second passed
[1,2,3].reduce(function(accumulator, nextValue, index, array){
	Whatever is returned inside here, will be the value of accumulator in the next iternation.
})

* Lets break it down

var arr = [1,2,3,4,5];
arr.reduce(function(accumulator, nextValue){
	return accumulator + nextValue;
});

accumulator		nextValue		returnedValue
1				2				3
3				3				6
6				4				10
10				5				15

* Adding a second parameter

var arr = [1,2,3,4,5];
arr.reduce(function(accumulator, nextValue){
	return accumulator + nextValue;
},10);

accumulator		nextValue		returnedValue
10				1				11
11				2				13
13				3				16
16				4				20
20				5				25

* How about strings?

var names = ["Tim", "Matt", "Colt", "Elie"];
names.reduce(function(accumulator, nextValue){
	return accumulator += ' ' + nextValue;
}, 'The instructors are ');

accumulator				nextValue		returnedValue
The instructors are 	Tim				" " Tim.
" "						Matt			" " Tim Matt.
" "						Colt			" " Tim Matt Colt.
" "						Elie			" " Tim Matt Colt Elie.

* How about objects?

var arr = [5,4,1,4,5];
arr.reduce(function(accumulator, nextValue){
	if(nextValue in accumulator){
		accumulator[nextValue]++;
	} else {
		accumulator[nextValue] = 1;
	}
},{});

accumulator				nextValue		returnedValue
{}					 	5				{5:1}
{5:1} 					4				{5:1, 4:1}
{5:1, 4:1} 				1				{5:1, 4:1, 1:1}
{5:1, 4:1, 1:1}			4				{5:1, 4:2, 1:1}
{5:1, 4:2, 1:1}			5				{5:2, 4:2, 1:1}

* Using reduce in a function

function sumOddNumbers(arr){
	return arr.reduce(function(accumulator, nextValue){
		if(nextValue % 2 !== 0){
			accumulator += nextValue;
		}
		return accumulator;
	}, 0);
}
sumOddNumbers([1,2,3,4,5]); //9

* Using reduce in a function 2

function createFullName(arr){
	return arr.reduce(function(accumulator, nextValue){
		accumulator.push(nextValue.first + " " + nextValue.last);
		return accumulator;
	}, []);
}
createFullName([{first: "Colt", last:"Steele"}, {first: "Matt", last:"Lane"}]);
<!-- ["Colt Steele", "Matt Lane"] -->

# RECAP
* forEach iterates over an array, runs a callback on each value and returns undefined.

* map creates a new array, runs a callback on each value and pushes the result of each callback in the new array

* filter creates a new array, runs a callback on each value and if the result of the callback returns, that value is added to the new array

* some iterates through an array and runs a callback on each value, if the callback for at least one value returns true, some returns true, otherwise false

* every iterates through an array and runs a callback on each value, if the callback at any time returns false, every returns false

* reduce returns an accoumulated value which is determined by the result of what is returned to each callback