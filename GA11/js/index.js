$(document).ready(function(){

	 var tempF;
	 var tempC;
	 
	$('#convertToCelcius').click(convertToCelcius);
	$('#convertToFarenheit').click(convertToFarenheit);

	function convertToCelcius() {
	   tempF = parseInt($('#temp').val(), 10);
	   tempC = (tempF - 32) * 5 / 9;
	   
	   $('#result').html(format(tempC));
	   $('#result').show();
	   $('#inputTemp').hide();
	   
	}
	
	function convertToFarenheit() {
	   tempC = parseInt($('#temp').val(), 10);
	   tempF = (tempC * 9 / 5) + 32;
	   
	   $('#result').html(format(tempF));
	   $('#result').show();
	   $('#inputTemp').hide();
	}

	function format(number) {
	number = parseFloat(number);
	number = number.toFixed(2);
	return number + '°';
	}
});