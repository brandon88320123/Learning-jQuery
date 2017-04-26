$(document).ready(function() {
	$("#content").html("Hey");
	
	$("#btn1").click(function() { //also an event
		var name= window.prompt("Enter name:");
		$("#content").html("hey, "+ name);
	});
	$("#btn2").click(function() { //also an event
		
		$("#exercise").html("Learn jQuery");	
	});
});