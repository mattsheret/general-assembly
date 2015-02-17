$(document).ready(function() {
  // Run shuffle when the page loads
  shuffle()

  // Run shuffle when the button is clicked
  $("#shuffleButton").bind('click', shuffle);   

  // The function that changes all of the page content
  function shuffle(){
    // Text first
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
      divs = shuffleArray(divs)
      // Display the memories one at a time as they're shuffled
      for(var i = 0; i < divs.length; i++) $(divs[i]).appendTo(this);
      $(".memory").fadeIn("1000");
    });

    // Now the photos
    // Store the photos in an array
    var photos = ["beachyheadsign","carcass","fields","gravelpath","puddles","sevensisters","wildflowers","woods", "chalkhorse", "crumblingcliffs","flowers","osbeacon","signaltower","signpost","waypoint","wheatfield"];

    // Set a variable so old photos can be removed later
    var leadImage = $(".featuredImages");

    photos = shuffleArray(photos)

    // Set featured images based on the new order
    var featuredImage1 = photos[0];
    var featuredImage2 = photos[1];
    var featuredImage3 = photos[2];
    
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

  // The function that shuffles the arrays I want shuffled
  function shuffleArray ( inputArray ) {
    var i = inputArray.length;
    if ( i == 0 ) return false;
    while ( --i ) {
      var j = Math.floor( Math.random() * ( i + 1 ) );
      var tempi = inputArray[i];
      var tempj = inputArray[j];
      inputArray[i] = tempj;
      inputArray[j] = tempi;
    } 
    return inputArray
  }

});