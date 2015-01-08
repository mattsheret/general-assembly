//Implement the red light using jQuery. Don't forget to add the script tags.

$('#stopButton').click(turnRed);

function turnRed() {
	$('#stopLight').css('backgroundColor', 'red')	
}

//Had some stuff to clear lights here, and then called clear lights in the functions for each light
