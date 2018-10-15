# JASMINE

- Understand what Jasmine and unit testing are
- Define describe, it, matchers, and spies
- Write better tests with before and after hooks
- Write asynchronous tests with clocks and done callbacks
- Compare and contrast TDD and BDD and differentiate between unit and other kinds of tests
- Write unit tests using Jasmine

# Unit Tests
- Unit tests, test parts of an application, (or units). Very commonly, each unit is a tested individually and independently to ensure an application is running as expected.

# Intro to Jasmine
- Comes with everything we need to test our code.
- Works with all kinds of JavaScript environments
- Simple syntax to quickly get up and running with

# How it works
- Create an html file
- Link CSS and JavaScript tags
- Start writing tests!

# Essential Keywords
- describe		Organise tests. 			"let me describe ___ to you."
- it			Describe test. 				"let me tell you about ___."
- expect		Expectations/assertions. 	"here's what I expect"

* Conceptual exercise

	describe("Earth")
		it("is round")
			expect(earth.isRound.toBe(true))
		it("is the third planet from the sun")
			expect(earth.numberFromSun).toBe(3)

# Matchers
* toBe / not.toBe 	
				Uses triple equals
* toBeCloseTo		
				Compare 2 values and accepts 2nd value for precision
* toBeDefined		
				Check if value has specific value and not undefined
* toBeFalsey / toBeTruthy	
				When you expect value to be true or false
* toBeGreaterThan / toBeLessThan 
				Check value is less than or greater than
* toContain
				Check if value is contained in an array
* toEqual
				Compares with different object reference as well
* jasmine.any()
				Check the type of a value
* jasmine.objectContaining
				Check an object contains a value

# Hooks
* BeforeEach
				run before each "it" callback
* afterEach
				run after each "it" callback - useful for teardown
* beforeAll / afterAll
				run before/after all tests. Does not reset inbetween

var count = 0;

beforeEach(function(){
	count++;
});
afterEach(function(){
	count = 0;
});

* Nesting describe
				Possible to nest multiple describe blocks inside
* Pending tests
				Sometimes you just don't know...
				Pending if x before it 'xit'
				No callback function
				Pending function is invoked 'pending();'

BEFORE
describe("Earth", function(){
	it('is round and has a method to check what number it is from the sun', function(){
		expect(earth.isRound()).toBe(true);
		expect(earth.howFarFromSun.toBe(jasmine.any(Function));
		expect(earth.howFarFromSun()).toBe(3);
	});
});

AFTER
describe("Earth", function(){
	it('is round', function(){
		expect(earth.isRound()).toBe(true);
	});
	it('has a method to check what number it is from the sun', function(){
		expect(earth.howFarFromSun.toBe(jasmine.any(Function));
		expect(earth.howFarFromSun()).toBe(3);
	});
});

# Spies
* Jasmine has test double functions called spies.
* A spy can stub (mimic) any function and track calls to it and all arguments.
* Spies only exists in the describe or it block in which it is defined.
* Spies are removed after each spec.

# Creating a spy
function add(a,b,c){
	return a+b+c;
}

var addSpy, result;
beforeEach(function(){
	addSpy = spyOn(window, 'add');
	result = addSpy(1,2,3);
});

- toHaveBeenCalled() 	
			ensure function was called
- toHaveBeenCalledWith(1,2,3)	
			check parameters function was called with
- calls		
			check how many times a function has been called

# Clock
* The Jasmine Clock is available for testint time dependent code.
* It is installed by invoking jasmine.clock().install()
* Be sure to uninstall the clock after you are done to restore the original functions.

* setTimeout

describe("a simple setTimeout", function(){
	var sample;
	beforeEach(function(){
	sample = jasmine.createSpy("sampleFunction");
	jasmine.clock().install();
	});

	afterEach(function(){
		jasmine.clock().uninstall();
	});

	it("is only invoked after 1000 milliseconds", function(){
		setTimeout(function(){
			sample();
		}, 1000);
	jasmine.clock().tick(999);
	expect(sample).not.toHaveBeenCalled();
	jasmine.clock().tick(1);
	expect(sample).toHaveBeenCalled();
	});
});

# Testing async code
* Jasmine also has support for running specs that require testing async code.
* beforeAll, afterAll, beforeEach, afterEach, and it takes an optional single argument (commonly called 'done') that should be called when the async work is complete.
* A test will not complete until its 'done' is called.

function getUserInfo(username){
	return $.getJSON("https://api.github.com/users/" + username);
}

describe("#getUserInfo", function(){
	it("returns the correct name for the user", function(done){
		getUserInfo('Joel').then(function(data){
			expect(data.name).toBe('Joel Halford');
			done();
		});
	});
});