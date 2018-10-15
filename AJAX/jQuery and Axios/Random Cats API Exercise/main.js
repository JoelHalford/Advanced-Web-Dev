$("#getCat").click(function(){
	$.getJSON("http://aws.random.cat/meow")
	.done(function(data){
		$("#image").attr('src', data.file);
	})
	.fail(function(){
		console.log("error");
	});
})