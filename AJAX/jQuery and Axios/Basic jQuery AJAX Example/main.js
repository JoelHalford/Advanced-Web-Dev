$("#btn").click(function(){
	$.ajax({
		method: "GET",
		url: 	"https://baconipsum.com/api/?type=meat-and-filler",
		dataType: 'json'
	})
	.done(addP)
	.fail(function(){
		alert("failed");
	});

	function addP(data){
		$("#bacon").text(data[0]);
	};
});