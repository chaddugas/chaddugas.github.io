$(document).ready(function() {
  //Variables
  var $pswd = $("#password"),
      $confirm = $("#confirm_password")
      $usrname = $("#username");
      
  //Functions
  function isUsernamePresent() {
    return $usrname.val().length > 0;
  }
  function isPasswordValid() {
    return $pswd.val().length > 8;
  }
  function arePasswordsMatching() {
    return $confirm.val() === $pswd.val();
  }
  function canSubmit() {
    return isPasswordValid() && arePasswordsMatching() && isUsernamePresent();
  }
  function passwordEvent() {
    if( isPasswordValid() ) {
      $pswd.siblings("span").fadeOut();
    } else {
      $pswd.siblings("span").fadeIn();
    }
  }
  function confirmationEvent() {
    if( arePasswordsMatching() ) {
      $confirm.siblings("span").fadeOut();
    } else {
      $confirm.siblings("span").fadeIn();
    }  
  }
  function enableSubmitEvent() {
    $('input[type="submit"]').prop("disabled", !canSubmit())
  }
  
  //Run On Page Load
  $("form span").hide();
  enableSubmitEvent();
  
  //Run on Keyup and Focus Events
  $("#password").focus(passwordEvent).keyup(passwordEvent).keyup(confirmationEvent).keyup(enableSubmitEvent);
  $("#confirm_password").focus(confirmationEvent).keyup(confirmationEvent).keyup(enableSubmitEvent);
});//end document ready


