/* Contact Form Validation (Vanila JS) */
function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if(name.length < 3){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      error_message.style.background = "red";
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 3){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      error_message.style.background = "red";
      return false;
    }
    if(message.length < 5){
      text = "Please Enter More Than 5 Characters";
      error_message.innerHTML = text;
      error_message.style.background = "red";
      return false;
    }
    else{
        text = "Thanks For Messaging Us!";
        error_message.innerHTML = text;
        error_message.style.background = "green";
        return false;
    }
  }
  /* Back To Top */
    var mybutton = document.getElementById("myBtn");

    window.onscroll = function() {scrollFunction();};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
