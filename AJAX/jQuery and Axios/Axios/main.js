var url = "https://opentdb.com/api.php?amount=1";
var btn = document.getElementById("nextQuestion");
var question = document.getElementById("showQuestion");
var answers = document.getElementsByClassName("answer");

btn.addEventListener("click", function(){
	axios.get(url)
	.then(function(res){
		question.innerHTML = res.data.results[0].question;
	})
	.catch(function(){
		console.log("ERR");
	});
});