$(document).ready(function(){
  $("input#email").focusout(function(){
    if (validateEmail($(this).val()))
    {
      $.post(location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '')
        + "/tmp_emails/save", { email: $(this).val()});
    }
    else
    {
      console.log("email " + $(this).val() + " bad format")
    }

  });

  // from this thread http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
  function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  } 
});
