console.log('hi')

// Keep track of total amount in a variable
var total = 0.00;

// Attach function to form submit event
$('#entry').submit(item);

// Declare func for dealing with entry
function item(){
	// Get value of latest entry
	var latestEntry = $('#newEntry').val();
	var latestEntryFormatted;

	// Needs to be a float
	latestEntry = parseFloat(latestEntry);

	// Call formatting function on entry
	latestEntryFormatted = format( latestEntry );

	// Add row to #entries
	$('#entries').append('<tr><td></td><td>' + latestEntryFormatted + '</td></tr>');

	// Update total value  
	total = total + latestEntry;

	// Update #total in HTML (Call formatting function on total)
	$('#total').html( format(total));

	// Clear new entry val for next time
	$('#newEntry').val('');

	// Prevent form from submitting (gotcha)
	return false;
}
// Bonus function for formatting currency
function format(number) {
	number = parseFloat(number);
	number = number.toFixed(2);
	return '£' + number;
}
