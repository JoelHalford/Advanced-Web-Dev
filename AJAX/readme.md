# Asynchronous JavaScript and XML

# AJAX IS NOT
	* A library 	* A framework
	* A technology

# AJAX IS
	* An approach

	With AJAX, websites can send and request data from a server in the background without disturbing the current page

# Making requests with JavaScript
	* XMLHTTP Reuqest
	* The Fetch API
	* 3rd Party Libraries: jQuery, Axios, etc.

# JSON and XML
	* Both data formats
	API's don't respond with HTML. API's respond with pure data, not structure.

	# XML (Extended Markup Language)
	XML is syntacticly similar to HTML, but it does not describe presentation like HTML does.

	# JSON (JavaScript Object Notation)
	JSON looks (almost) exactly like JavaScript objects

#XMLHTTPRequest
	var XHR = new XMLHttpRequest();
	
	XHR.onreadystatechange = function() {
		if(XHR.readyState == 4) {
			if(XHR.status == 200){
				console.log(XHR.responseText);
			} else {
				console.log("There was a problem!");
			}			
		}
	};

	XHR.open("GET", "https://api.github.com/zen");
	XHR.send();

# PROBLEMS WITH XHR
	- Ugly, bulky syntax
	- 16 years old
	- No streaming

# FETCH API
	- Instead of getting all data, fetch allows streaming data back.
	- Simpler syntax. Example:

	fetch(url)
	.then(function(res){
		console.log(res);
	})
	.catch(function(err){
		console.log(error);
	});

# FETCH OPTIONS
	https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
	- Example
	fetch(url, {
		method: 'POST',
		body: JSON.stringify({
			name: 'blue',
			login: 'bluecat'
		})
	})
	.then(function(data) {
		//do something
	})
	.catch(function(error) {
		//handle error
	});

# PROBLEMS WITH FETCH
	- Browser support (IE no basic support)

# jQuery AJAX Introduction
	Making a request and parsiong JSON

	$.getJSON('/my/url', function(data){
	});

	jQuery AJAX Methods
	- $.ajax 	- $.get
	- $.post 	- $.getJSON

# $.ajax
	- The "base" jQuery Method
	$.ajax({
		method: "GET",
		url:	"some.api.com"
	})
	.done(function(res){
		console.log(res);
	})
	.fail(function(){
		//do something
	});

# $.get
	$.get('https://api.github.com/users/JoelHalford')
	.done(function(data){
		console.log(data);
	})
	.fail(function(){
		console.log("ERROR!");
	});

# $.post
	var data = {name: "Charlie", city: "Florence"};
	$.post("www.catsarecoolandsoaredogs.com", data)
	.done(function(data){
		console.log("HI!");
	})
	.fail(function(){
		console.log("ERROR!");
	});

# $.getJSON
	$.getJSON("https://api.github.com/users/colt")
	.done(function(data){
		console.log(data);
	})
	.fail(function(){
		console.log("PROBLEM!");
	});

# AXIOS Intro

* axios.get (makes a get request)
	axios.get(url)
	.then(function(res){
		console.log(res.data);
	})
	.catch(function(e){
		console.log(e);
	});
