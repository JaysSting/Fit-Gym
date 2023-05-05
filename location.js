function submitForm() {
  // get form elements
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // check if all fields are filled
  if (name == "" || email == "" || message == "") {
    alert("Please fill all fields.");
    return false;
  }

  // create message for pop-up
  var popupMsg = "Thank you for contacting us, " + name + "! We will get back to you soon.";

  // show pop-up message
  alert(popupMsg);

  // reset form fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  return true;
}
