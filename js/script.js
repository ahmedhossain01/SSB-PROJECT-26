// ex 2


// ex 1
$(document).ready(function(){

	$('#btn1').on('click', function(){
		$('h3').show();
	});

	$('#btn2').on('click', function(){
		$('h3').hide();
	});

	$('#btn3').on('click', function(){
		$('h3').toggle();
	});

});