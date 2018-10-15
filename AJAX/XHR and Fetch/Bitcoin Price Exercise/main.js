var btn = document.querySelector("button");
var price = document.querySelector("#price");
var currency = "USD";

btn.addEventListener("click", function(){
	var XHR = new XMLHttpRequest();
	var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
	XHR.onreadystatechange = function(){
		if (XHR.readyState == 4 && XHR.status == 200)
		{
			var data = JSON.parse(XHR.responseText);
			price.innerHTML = data.bpi[currency].symbol + data.bpi[currency].rate;
		}
	}

	XHR.open("GET", url);
	XHR.send();
});