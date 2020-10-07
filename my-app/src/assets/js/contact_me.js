function validateForm(){
  var pass1 = document.getElementsByName("password")[0].value;
  if (pass1 == 'BK2021') {
    window.location.assign("https://www.google.com");
  } else {
      alert("Passwords Do Not Match");
  }
}
