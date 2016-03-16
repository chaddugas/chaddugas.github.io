$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    
    var formData = $(this).serialize();
    var url = $(this).attr("action");
    
    console.log(formData);
    $.post(url, formData, function(response) {
      $('form').hide();
      $('body').append('<div id="thanks"><p>Thanks For Signing Up!</p></div>');
    });//end post
  });//end submit function
});//end document ready