# ##################
##### CLOSURES #####
# ################## 

* Understand what a closure is and what it is not
* Use a closure to emulate private variables
* List use cases for closures in the real world

# Closure definition

* A closure is a function that makes use of variables defined in outer functions that have previously returned

# Example of a closure

*	function outer(){
		var start = "Closures are";
		return function inner(){
			return start + " " + "awesome";
		}	
	}

# Example 2

*	function outer(a){
		return inner(b){
			return a+b;
		}
	}
	outer(5)(5); //10

	var storeOuter = outer(5);
	storeOuter(10);

* We have to return the inner function for this to work
* We can either call the inner function right away by using an extra () or we can store the result of the function in a variable;
* We do NOT have to give the inner function a name - we can make it anonymous (we just called it "inner" for learning purposes)

# Are these closures?

*	1 - NOT A CLOSURE
*	function outerFn(){
		var data = "Something from outer";
		 return function innerFn(){
		 	return "Just returned from the inner function";
		}
	}

*	2 - IS A CLOSURE
	function outerFn(){
		var data = "Something from outer";
		return function innerFn(){
			var innerData = "Something from inner";
			return data + " " + innerData;
		}
	}

* Because a closure only exists when an inner function makes use of variables defined from an outer function that has returned. If the inner function does not make use of the external variables all we have is a nested function;

# How Closures Work

* Only variables used in the inner function are remembered!

*	function outerFn(){
		var data = "Something from outerFn";
		var fact = "Remember me!";
		return function innerFn(){
			debugger
			return fact;
		}
	}

* Closures don't remember everything from an outer function - just the variables they need!

# Use Cases for Closures

* Private Variables - In other languages, there exists support for variables that can not be modified externally. We call those private variables, but in JavaScript we don't have that built in. Closures can help.

* Example [Private Variable]
	
*	function counter(){
		var count = 0;
		return function inner(){
			counter++;
			return count;
		}
	}

	var counter1 = counter();
	counter1(); //1
	counter1(); //2

	var counter2 = counter();
	counter2(); //1

	count
	referenceError

* Example [More Privacy] ! WRONG IMPLEMENTATION !

*	function classRoom(){
		var instructors = ["Elie", "Colt"];
		return {
			getInstructors: function(){
				return instructors;
			},
			addInstructors: function(instructor){
				instructors.push(instructor);
				return instructors;
			}
		}
	}

	var  first = classRoom()

	first.getInstructors()
	//array with Elie and Colt

	first.addInstructor("Matt")
	//array with Elie, Colt and Matt

	first.addInstructor("Tim")
	//array with Elie, Colt, Matt and Tim

	var second = classRoom()

	second.addInstructor("New")
	//array with Elie, Colt and New

* Correct implementation 

*	function classRoom(){
		var instructors = ["Elie", "Colt"];
		return {
			getInstructors: function(){
				return instructors.slice();
			},
			addInstructor: function(instructor){
				instructors.push(instructor);
				return instructors.slice();
			}
		}
	}

# Closures recap

* Closure exists when an inner function makes use of variables declared in an outer function which was previously returned
* Closure does not exist if you do not return an inner function and if that inner function does not make use of variables returned by an outer function
* JavaScript will only remember values that are being used inside the inner function, not all variables defined in the outer functions
* We can use closures to create private variables and write better code that isolates our logic and application


# ##################
## KEYWORD 'THIS' ##
# ################## 

* Define what the keyword 'this' is
* Understand the four ways to always figure out what the keyword 'this' is

# What is 'this'?

* A reserved keyword in JavaScript
* Usually determined by how a function is called (what we call 'execution context')
* Can be determined using four rules (global, object/implicit, explicit, new)

# 1 - Global Context

* When this is not inside of a declared object
- console.log(this); //window

# 'this' with Functions and "use strict"

# Strict mode

"use strict"

console.log(this); //window

function whatIsThis(){
	return this;
}

whatIsThis(); // undefined

* Since we are in strict mode this is undefined 

"use strict"
function variablesInThis(){
	this.person = "Elie";
}
variablesInThis(); // TypeError, can't set person on undefined;

# Object/Implicit Binding
* When the keyword 'this' IS inside of a declared object

// strict mode does NOT make a difference here
var person = {
	firstName: 'Elie',
	sayHi: function(){
		return "Hi " + this.firstName;
	},
	determineContext: function(){
		return this === person;
	}
}
person.sayHi(); // "Hi Elie"
person.determineContext(); //true

* What should the keyword 'this' refer to here?

var person = {
	firstName: "Elie",
	determineContext: this;
}
person.determineContext; //window

* A keyword 'this' is defined when a function is run! There is not a function being run here to create a new value of the keyword 'this' so the value of 'this' is still the window!

* Nested Objects - What happens when we have nested objects?

var person = {
	firstName: "Colt",
	sayHi: function(){
		return "Hi " + this.firstName;
	},
	determineContext: function(){
		return this === person;
	},
	dog: {
		sayHello: function(){
			return "Hello " + this.firstName;
		},
		determineContext: function(){
			return this === person;
		}
	}
}
person.sayHi(); // "Hi Colt"
person.determineCOntext(); // true
//but what is the value of the keyword this right now?
person.dog.sayHello(); // "Hello undefined"
person.dog.determineContext(); // false

# Explicit Binding
* Choose what we want the context of 'this' to be using call, apply or bind.

NAME OF METHOD		PARAMETERS				INVOKE IMMEDIATELY?
Call				thisArg,a,b,c,d,.. 		Yes
Apply				thisArg,[a,b,c,d,...] 	Yes
Bind				thisArg,a,b,c,d,... 	No

# Call
* Fixing with call

person.dog.sayHello.call(person); // "Hello Colt"
person.dog.determineContext.call(person); // true

* Common use case
* Problem

var colt = {
	firstName: "Colt",
	sayHi: function(){
		return "Hi " + this.firstName;
	}
}
var elie = {
	firstName: "Elie",
	sayHi: function(){
		return "Hi " + this.firstName;
	}
}
colt.sayHi(); //Hi Colt
elie.sayHi(); //Hi Elie (but we had to copy and paste the function above)

* Solution

var colt = {
	firstName: "Colt",
	sayHi: function(){
		return "Hi " + this.firstName;
	}
}
var elie = {
	firstName: "Elie"
}
colt.sayHi(); //Hi Colt
colt.sayHi.call(elie); //Hi Elie

* One Step Further
Lets make a sayHi function for anyone

function sayHi(){
	return "Hi " + this.firstName;
}
var colt = {
	firstName: "Colt"
}
var elie = {
	firstName: "Elie"
}
sayHi.call(colt);
sayHi.call(elie);

* Another Use Case For Call
Let's imagine we want to select all the 'divs' on a page

var divs = document.getElementsByTagName('div ');

* How can we find all the divs that have the text "Hello". Using filter would be nice!

divs.filter //undefined

* Unfortunately, divs is not an array, it's an array like object so filter won't work. So how can we convert an array-like-object into an array? Very similar to the way we make copies of arrays - using slice!

* Let's use the slice method on arrays, but instead of the target of slice (the keyword this) being that array, let's set the target of the keyword 'this' to be our divs array-like-object.

var divsArray = [].slice.call(divs);

divsArray.filter(function(val){
	return val.innerText === 'Hello';
});

* What we are doing is trying to slice something that is not actually an array! In javascript, slice will not work on all data types, but it works very well on array-like-objects.

# Apply

function addNumbers(a,b,c,d){
	return this.firstName + " just calculated " + (a+b+c+d);
}
var colt = {
	firstName: "Colt"
}
var elie = {
	firstName: "Elie"
}
addNumbers.call(elie,1,2,3,4); // Elie just calculated 10
sayHi.apply(elie,[1,2,3,4]); // Elie just calculated 10

* When to use apply
When a function does not accept an array, apply will spread out values in an array for us!

var nums = [5,7,1,4,2];
Math.max(nums); // NaN
Math.max.apply(this, nums); // 7


function sumValues(a,b,c){
	return a+b+c;
}
var values = [4,1,2];
sumValues(values); //4,1,2undefinedundefined
sumValues.apply(this,[4,1,2]); //7

# Bind
* The parameters work like call, but bind returns a function with the context of 'this' bound already!

function addNumbers(a,b,c,d){
	return this.firstName + " just calculated " + (a+b+c+d);
}
var elie = {
	firstName: "Elie"
}
var elieCalc = addNumbers.bind(elie,1,2,3,4); // function(){}...
elieCalc();	// Elie just calculated 10

* With bind - we do not need to know all the arguments up front! This is called partial application

var elieCalc = addNumbers.bind(elie,1,2); // function(){}...
elieCalc(3,4);	// Elie just calculated 10 

* Very commonly we lose the context of 'this', but in functions that we do not want to execute right away!

var colt = {
	firstName: "Colt",
	sayHi: function(){
		setTimeout(function(){
			console.log("Hi " + this.firstName);
		}, 1000);
	}
}
colt.sayHi(); // Hi undefined (1000 milliseconds later)

* Use bind to set the correct context of 'this'

var colt = {
	firstName: "Colt",
	sayHi: function(){
		setTimeout(function(){
			console.log("Hi " + this.firstName);
		}.bind(this), 1000);
	}
}
colt.sayHi(); // Hi Colt (1000 milliseconds later)

# New Keyword

* We can set the context of the keyword 'this' using the 'new' keyword - it does quite a bit more as well

function Person(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}
var elie = new Person('Elie', 'Schoppik');

# Recap

* The keyword 'this' is a reversed keyword in Javascript and its value is determined at execution
* It is either set using the global context, object binding, explicit binding or the new keyword
* When set in the global context in a function, it is either the global object (window if in the browser) or undefined (if we are using strict mode)
* To explicitly set the value of the keyword 'this', we use call, apply, or bind
* We can also sue the 'new' keyword to set the context of 'this'