$(function() {
  // YOUR CODE HERE
  //Exercise 1
  $('#toggleButton').click(function(){
    $('#myParagraph').toggle();
  });

  //Exercise 2
  $('#colorButton').click(function(){
    $('#colorDiv').css({'background-color': 'yellow'});
  });

  //Exercise 3
  $('#addClassButton').click(function(){
    $('#classDiv').addClass('newClass');
  });

  $('#removeClassButton').click(function(){
    $('#classDiv').removeClass('newClass');
  });

  //Exercise 4
  $('#fadeInButton').click(function(){
    $('#fadeDiv').fadeIn();
  });

  $('#fadeOutButton').click(function(){
    $('#fadeDiv').fadeOut();
  });
});
