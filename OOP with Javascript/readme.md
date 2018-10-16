# Objectives
* Define what OOP is
* Revisit the 'new' keyword and understand the four thigns it does
* Use constructor functions to reduce duplication in our code
* Use call and apply to refactor constructor functions

# OOP Defined
* A programming model based around the idea of objects
* These objects are constructed from what are called "classes", which we can think of like a blueprint. We call these objects created from classes "instances"
* We strive to make our classes abstract and modular

# OOP in JavaScript
* JavaScript does not have "classes" built into it, so we use functions and objects to mimic.

# Object Creation
* Imagine we want to make a few house objects, they will all have bedrooms, bathrooms and numSqft.

* Instead of making an infinite number of different objects, let's see if we can create a function to construct these similar "house" objects.

# Constructor Functions
* Let's use a function as ablueprint for what each house should be - we call these kinds of functions "constructor" functions

function House(bedrooms, bathrooms, numSqft){
	this.bedrooms = bedrooms;
	this.bathrooms = bathrooms;
	this.numSqft = numSqft;
}

* Capitalization of the function name - this is convention.
* The keyword 'this' is back!
* We are attaching properties onto the keyword 'this'. We would like the keyword 'this' to refer to the object we will create from our constructor function.

# Creating an object
* So how do we use our constructor to create objects?

var firstHouse = House(2,2,1000) //does this work?
firstHouse // undefined... guess not!

* We are not returning anything from the function so our House function returns undefined
* We are not explicitly binding the keyword 'this' or placing it inside a declared object. This means the value of the keyword 'this' will be the global object, which is not what we want!

# The 'new' keyword
* Our solution to the problem

var firstHouse = new House(2,2,1000);
firstHouse.bedroom; //2
firstHouse.bathroom; //2
firstHouse.numSqft; //1000

* It first creates an empty object
* It then sets the keyword 'this' to be that empty object
* It adds the line 'return this' to the end of the function, which follows it
* It adds a property onto the empty object called "__pronto__", which links the prototype property on the constructor function to the empty object

function Dog(name, age){
	this.name = name;
	this.age = age;
	this.bark = function(){
		console.log(this.name + " just barked!");
	}
}
var rusty = new Dog('Rusty', 3);
var Fido = new Dog('Fido', 1);

rusty.bark(); //Rusty just barked!
fido.bark(); //Fido just barked!

# Multiple Constructors 
* Let's create two constructor functions, one for a Car and one for a Motorcycle - here is what it might look like

function Car(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
	this.numWheels = 4;
}
function Motorcycle(make, mode, year){
	this.make = make;
	this.model = model;
	this.year = year;
	this.numWheels = 2;
}
* Notice how much duplication is going on in the Motorcycle function. Is there any way to "borrow" the car function and invoke it inside the Motorcycle function?

* Using call/apply we can refactor our code quite a bit

function Car(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
	this.numWheels = 4;
}
function Motorcycle(make, mode, year){
	<!-- using call -->
	Car.call(this, make, model, year);
	this.numWheels = 2;
}
function Motorcycle(make, mode, year){
	<!-- using apply -->
	Car.apply(this, [make, model, year]);
	this.numWheels = 2;
}
function Motorcycle(){ 
	<!-- we don't need to even pass in parameters -->
	<!-- even better using apply with arguments -->
	Car.apply(this, arguments);
	this.numWheels = 2;
}

# Recap
* Object Oriented Programming is a model based on objects constructed from a blueprint. We use OOP to write more modular and shareable code.
* In languages that have built-in support for OOP, we call these blueprints "classes" and the objects created from them "instances"
* Since we do not have built-in class support in JavaScript, we mimic classes by using functions. These constructor functions create objects through the use of the new keyword

# ########## #
# Prototypes #
# ########## #

# Objectives

* Understand what the prototype object is
* Describe and diagram the relationship between _proto_, prototype, and constructor
* Add methods and properties on the prototype object to write more efficient code
* Explain the differences between adding methods and properties to the prototype versus the constructor function
* Implement inheritance in JavaScript through the prototype object

# A Small Diagram
() = function	[] = objects

			.prototype >
(Person)						[Person .prototype]
			.constructor <
								/	.__proto__  \
							   [elie]		   [colt]

* Every constructor function has a property on it called "prototype", which is an object
* The prototype object has a property on it called "constructor", which points back to the constructor function
* Anytime an object is created using the 'new' keyword, a property called "__proto__" gets created, linking the object and the prototype property of the constructor function

# Code - let's see that previous example in code
<!-- this is the constructor function -->
function Person(name){
	this.name = name;
}
<!-- these are objects created from the Person constructor -->
var elie = new Person("Elie");
var elie = new Person("Colt");
<!-- Since we used the new keyword, we have established a link between the object and the prototype property We can access that using __proto__ -->
elie.__proto__ === Person.prototype; //true
colt.__proto__ === Person.prototype; //true
<!-- The Person.prototype object also has a property called constructor which points back to the function -->
Person.prototype.constructor === Person; //true

# Prototype
* Where does the prototype property fit into all of this? Remember, the prototype is shared among all objects created by that constructor function

<!-- this is the constructor function -->
function Person(name){
	this.name = name;
}
<!-- this is an objected created from the Person constructor -->
var elie = new Person("Elie");
var colt = new Person("Colt");

Person.prototype.isInstructor = true;

elie.isInstructor; //true
colt.isInstructor; //true

<!-- how were we able to access properties on the prototype? -->
<!-- __proto__ -->

# Prototype Chain
* Javascript finds methods and properties in the dunder proto (__proto__) if does not exist outside of. If it is not found, undefined is returned.

# Refactoring
* Now that we know that objects created by the same constructor have shared prototype, let's refactor some code:

function Person(name){
	this.name = name;
	this.sayHi = function(){
		return "Hi " + this.name;
	}
}
elie = new Person("Elie");
elie.sayHi();// Hi Elie

* The code works, but it is inefficient. Every time we make an object using the new keyword we have to redefine the sayHi function.

function Person(name){
	this.name = name;
}
Person.prototype.sayHi = function(){
	return "Hi " + this.name;
}
elie = new Person("Elie");
elie.sayHi();// Hi Elie

# Challenge
* Create a constructor function for a Vehicle: every object created from this constructor should have a make, mode, and year property. Each object should also have a property called isRunning, which should be false.
* Every object created from the vehicle constructor should have a function called turnOn, which changes the isRunning property to true;
* Every object created from the vehicle constructor should have a function called turnOff, which changes the isRunning property to false;
* Every object created from the vehicle constructor should have a method called honk, which returns the string "beep" ONLY if the isRunning property is true


function Vehicle(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
	this.isRunning = false;
}
Vehicle.prototype.turnOn = function(){
	this.isRunning = true;
}
Vehicle.prototype.turnOff = function(){
	this.isRunning = false;
}
Vehicle.prototype.honk = function(){
	if (this.isRunning){
		return "beep";
	}
}
