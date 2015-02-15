$(document).ready(function(){
// Bit at the very top where we instantiate variables we'll need all the time
	var listItems;
	var count = 0;

// Bit at the top where we bind all the events to the HTML elements and call specific functions
	//$('#convertToCelcius').click(convertToCelcius);


	$('#newItems').on('submit', addTask);
	$('#todoList').on('click', 'li', toggleTaskAsDone);
	// $('#todoList').on('hover', 'li', showOptions);
	// $('#editButton').on('click', editTask);
	// $('#deleteButton').on('click', deleteTask);
	// $('#clearAll').on('click', deleteAll);
	// $('#clearDone').on('click', deleteDone);

// Bit further down where we write our functions

	function addTask (event) {
		event.preventDefault();
		var text = $('#taskField').val();
		count = count + 1;
		console.log(count);
		$('#list ul').append('<li>'+ text + '</li>');
		$('#taskField').val('');
		updateCount();
	};

	function toggleTaskAsDone(){ 
		$(this).toggleClass('done');
		//toggle counter too
	};

// 	showOptions()

// 	editTask()

// 	deleteTask()

// 	deleteAll()

// 	deleteDone()
// //saveEdit()
// //discardEdit()
	
 	function updateCount() {
	$('#tasksLeft').html(count);
	}


/*2.	When the user clicks remove next to a to do list item
	*	Select the to-do list item the user wants to remove
	*	Delete the selected item from the page*/
 
/*3.	When the user clicks the edit better next to a list item
	*	Select the to-do list item the user wants to edit
	*	Replace the text in the list item with an input whose value is the same as the existing text
	*	Show the save edit button and hide the edit button*/

/*4.	When the user clicks the save edit button
	*	Select the to-do list item the user wants to save
	*	Get the value of the input inside of this item
	*	Replace the input in the list item with the value of the input field*/
	 
/*6.	When the user clicks the Clear List button
	*	Select the list
	*	Empty the list
Optional: Store the emptied list to allow the user to go back.*/

/*7.	When the users clicks the Clear Completed button
	*	Select each to-do list item
	*	Check to see if it has been completed
	*	If it has been completed, remove the to-do list item

(in practice, select each to-do list item could be select completed to-do list items *if you're using a class to style a completed item*)*/


/*8.	Select the to-do list counter element
	*	Set the text inside the to-do list counter element to the number of items in the to-do list*/




});