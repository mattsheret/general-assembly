$(document).ready(function() {
  // Run shuffle when the page loads and when the button is clicked
  shuffle()

  $("#shuffleButton").bind('click', shuffle);   

  function shuffle(){
    // Hide any blockquotes currently visible
    $('#story div:nth-child(2) blockquote').css("display", "none");
    $('#story div:nth-child(9) blockquote').css("display", "none");
    $(".memory").css("display","none");

    // Find the memories
    $("#story").each(function(){
      var divs = $(this).find('.memory');
      // Hide the memories
      for(var i = 0; i < divs.length; i++) $(divs[i]).remove();
      // Shuffle the memories            
      var i = divs.length;
      if ( i == 0 ) return false;
      while ( --i ) {
        var j = Math.floor( Math.random() * ( i + 1 ) );
        var tempi = divs[i];
        var tempj = divs[j];
        divs[i] = tempj;
        divs[j] = tempi;
      } 
      // Display the memories one at a time as they're shuffled
      for(var i = 0; i < divs.length; i++) $(divs[i]).appendTo(this);
      $(".memory").fadeIn("1000");
    });

    // Store the image files in an array
    var numbers = ["beachyheadsign","carcass","fields","gravelpath","puddles","sevensisters","wildflowers","woods", "chalkhorse", "crumblingcliffs","flowers","osbeacon","payanddisplaysign","signaltower","signpost","waypoint","wheatfield"];

    // Set a variable so old images can be removed later
    var leadImage = $(".featuredImages");

    // Shuffle the images. I'm aware I'm duplicating maths used up there, but I'm not really sure how to make these more efficient.
    var i = numbers.length;
      if ( i == 0 ) return false;
      while ( --i ) {
        var j = Math.floor( Math.random() * ( i + 1 ) );
        var tempi = numbers[i];
        var tempj = numbers[j];
        numbers[i] = tempj;
        numbers[j] = tempi;
      }

    // Set featured images based on the new order
    var featuredImage1 = numbers[0];
    var featuredImage2 = numbers[1];
    var featuredImage3 = numbers[2];
    
    // Remove any displayed images
    leadImage.remove()
    
    // Display featured images after three specific memories
    $('#story div:nth-child(3)').after('<img class="featuredImages" src="images/'+ featuredImage1 +'.jpg">');
    $('#story div:nth-child(6)').after('<img class="featuredImages" src="images/'+ featuredImage2 +'.jpg">');
    $('#story div:nth-child(10)').after('<img class="featuredImages" src="images/'+ featuredImage3 +'.jpg">');
    
    // Display two quotes
    $('#story div:nth-child(2) blockquote').css("display", "inline-block");
    $('#story div:nth-child(9) blockquote').css("display", "inline-block");
    
  }

});