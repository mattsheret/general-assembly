$('.answer').hide();

$('.question').click(function(){
	$('.answer').slideUp();	
	$(this).siblings('.answer').slideToggle();
});
