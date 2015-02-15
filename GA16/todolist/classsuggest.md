#TODO LIST APP

list of todo items
seeing completed tasks
how many items left to do?
marking tasks as completed
add item to the list
clear/delete a single item
editing todo items
clear all items
clear items that are 'done'

##API

// Bit at the very top where we instantiate variables we'll need all the time
var count = 0;

// Bit at the top where we bind all the events to the HTML elements and call specific functions

// Bit further down where we write our functions

addTask()
deleteTask()
deleteAllTasks()
deleteAllCompletedTesks()
toggleTaskAsDone() //toggleCLass
setTaskToEditMode()
saveEdit()
discardEdit()
updateCount()

// jQuery selector
$('.main li')


###MARKUP

form
	<input type="text" id="" class="" value="" placheholder="" />
	submit button

<span id="count">0</span>

ul / ol
	li class for done
		text of item description
		button for marking as 'done'
		button for entering edit mode
		button for deleting this task

clear all button
clear done button


##Too Hard for Today
more than one todo list
reminders for items coming up
prioritisation - moving items up and down the list
dates/deadlines for tasks set when you add items
categorisation of tasks
sub tasks
