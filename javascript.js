// Javascript Document

window.alert("Click this button if you like Javascript");

$(document).ready(function() {

$("p").hide();	
$("#hide").click(function() {
	console.log('paragraph gone');
	$("p").hide();
});

$("#show").click(function(){
	console.log('paragraph back');
	$("p").show();
});

$('#showheader').click(function(){
	console.log('toggled!');
	$("h2").toggleClass('hide');

});
});