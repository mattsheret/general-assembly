$('#q1').click(toggleA1);
$('#q2').click(toggleA2);
$('#q3').click(toggleA3);
$('#q3b').click(toggleA3b);

$('.answer').hide();

function toggleA1() {
	hideAnswers();
	$('#a1').slideToggle();
}

function toggleA2() {
	hideAnswers();
	$('#a2').slideToggle();
}

function toggleA3() {
	hideAnswers();
	$('#a3').slideToggle();
	$('#q3b').slideToggle();	
}

function toggleA3b() {
	$('#a3b').slideToggle();
}

function hideAnswers() {
	$('.answer').slideUp();
}