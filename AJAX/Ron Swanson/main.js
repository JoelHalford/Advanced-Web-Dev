var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var xhrbtn = document.querySelector("#xhr");
var fetchbtn = document.querySelector("#fetch");
var quoteDisp = document.querySelector("#quote");

xhrbtn.addEventListener("click", function(){
	var XHR = new XMLHttpRequest();
	XHR.onreadystatechange = function(){
		if(XHR.readyState == 4 && XHR.status == 200) {
			var quote = JSON.parse(XHR.responseText);
			quoteDisp.innerText = quote;
		}
	}
	XHR.open("GET", url);
	XHR.send()
})

$("#fetch").click(function(){
	fetch(url)
	.then(function(req){
		req.json().then(function(data){
			quoteDisp.innerText = data[0];
		})
	})
	.catch(function(){
		console.log("ERROR");
	})
});

$("#jquery").click(function(){
	$.getJSON(url)
	.done(function(data){
		$("#quote").text(data[0]);
	}).fail(function(){
		console.log("err");
	});
});

$("#axios").click(function(){
	axios.get(url)
	.then(getQuote)
	.catch(handleErrors);
});

function getQuote(res){
	console.log(res.data[0]);
	$("#quote").text(res.data[0]);
}

function handleErrors(err){
	if (err.response)
	{
		console.log("Error with response: " + err);
	} else if (err.request)
	{
		console.log("Error with request: " + err);
	} else
	{
		console.log("Error: " + err);
	}
}