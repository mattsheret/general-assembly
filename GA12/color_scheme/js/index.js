
// select all list items in thing with ID switcher
// and bind a function to the click event
$('#switcher li').click(function(){

	// create a variable called 'liColour' with the value of the clicked item's ID attribute
	// e.g. liColour = 'gray';
	var liColour = $(this).attr('id');
	
	// call our switching function and pass this list item's id as the colour argument
	switchColour(liColour);
// switchColour('gray')
// switchColour('blue')
// switchColour('white')
});


function switchColour(colour) {
	// add a class to the <body> element
	// the class should be whatever the argument 'colour' is
	$('body').attr('class', colour);
}