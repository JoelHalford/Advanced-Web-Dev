# Callback Functions

* Define callback functions
	
	A function that is passed into another function as a parameter then invoked by that other function

* Define higher order functions

	A function that accept a callback as a parameter

* What are callbacks used for?

	- Advanced Array Methods
	- Browser Events
	- AJAX Requests
	- React Development

* Use a callback function to make your code more general
* Create callbacks using anonymous functions

# Codealong: forEach

* Describe and use the forEach function
* Implement the forEach function

# findIndex

* Describe and use the findIndex function

	Returns the index of the first element in the array for which the callback returns a truthy value. -1 is returned if the callback never returns a truthy value.

	function findIndex(array, callback) {
		//findIndex code to be implemented
	}

	function callback(curElement, curIndex, array) {
		// callback implemented by caller of function
	}

* Examples
	var arr = [3,4,6,2,1];
	findIndex(arr, function(num, index, array) {
		return num === 6;
		<!-- returns 2 -->
	});
	<!-- find first even number -->
	var arr = [5,11,13,8,6,7];
	findIndex(arr, function(num, index, array) {
		return num % 2 === 0;
		<!-- returns 3 -->
	});
	<!-- could not find -->
	var arr = ["Java", "C++", "Python", "Ruby"];
	findIndex(langs, function(lang, index, arr) {
		return lang === "JavaScript";
		<!-- returns -1 -->
	});
	<!-- Bad Callback -->
	var langs = ["Java", "C++", "JavaScript"];
	findIndex(langs, function(lang, index, arr) {
		lang === "JavaScript";
		<!-- returns -1 because no return -->
	});

# The Stack and the Heap
* Describe what the stack is

	- An ordered data structure
	- Keeps track of function invocations
	- Part of the JavaScript runtime (you don't access it directly)

	An ordered set of stack frames. Most recently invoked function is on the top of the stack. The bottom of the stack is the first function invoked. The stack is processed from top to bottom.

* How Your Code Changes the Stack

	- Whenever you invoke a function, the details of the invocation are saved to the top of the stack (pushed to the top)
	- Whenever a function returns, information about the invocation is taken off the top of the stack (popped off of the top)

* Describe the stack frame

	Contents:
	- The function that was invoked
	- The parameters that were passed to the function
	- Current line number

	function multiply(x,y) {
		return x * y;
	}

	var res = multiply(3,5);

	Stack:
	2 function: multiply
	5 function: main

* Describe the heap

	An area in memory where your data is stored.

	Example:
	//The object is created in the heap. obj is a reference to the object.
	var obj = {firstName: "Tim",
			   lastName: "Garcia"};

	//new data is not created, only a copy of the reference
	var referenceCopy = obj;

# setTimeout and setInterval

* Write asynchronous code using setTimeout

	a function that asynchronously invokes a callback after a delay in milliseconds

* Write asynchronous code using setInterval

	a function that continually invokes a callback after every X milliseconds, where X is provided to setInterval

# Event Loop and The Queue

* Define event loop and the queue

	The Queue
	- An ordered list of functions waiting to be placed on the stack
	- Functions in the queue are processed on a first in, first out basis (FIFO)

	The Event Loop
	- Functionality in the JavaScript runtime that checks the queue when the stack is empty
	- If the stack is empty, the front of the queue is placed in the stack

* Describe how the event loop and the queue work with the stack

	- a function is placed on the queue, the event loop checks the stack, once it's empty it moves the function from the queue on to the stack.

* Define JavaScript as a single threaded language

	- Single Threaded: Code execution is linear. Code that is running cannot be interrupted by something else going on in the program.

# Promise basics

* Define a promise

	- A promise is an object that represents a task that will be completed in the future

	- Analogy: Taking a number at a government office before you can get help. The piece of paper you get is like your promise. The help you get at the counter is like the invocation of your callback.

# Promse chaining

* Disadvantages of using nested callbacks
	- Hard to read
	- Logic is difficult to reason about
	- Code not modular

* Return promise from .then callback function (promise chaining)

* Use a promise to make asynchronous code seem sequential

	var counter = 0;
	setTimeout(function() {
		counter++;
		console.log("Counter:", counter);
		setTimeout(function() {
			counter++;
			console.log("Counter:", counter);
			setTimeout(function() {
				counter++;
				console.log("Counter:", counter);
			}, 3000);
		}, 2000);
	}, 1000);

	<!-- PROMISE -->
	var counter = 0;
	function incCounter() {
		counter++;
		console.log("Counter:", counter);
	}

	function runLater(callback, timeInMs) {
		var p = new Promise(function(resolve, reject) {
			setTimeout(function() {
				var res = callback();
				resolve(res);
			}, timeInMs);
		});
		return p;
	}

	runLater(incCounter, 1000).then(function() {
		return runLater(incCounter, 2000);
	}).then(function(){
		return runLater(incCounter, 3000);
	}).then(function(){
		//final .then not necessary
	});