$(document).ready(function(){
	var $button = $("button[type=button]");
	
	console.log($button);

	$button.on("click", function(event){
		this.text("<a href="#">Action</a>");
	})
});