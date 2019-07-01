function validateFormSignin() {
  var x = document.forms["mysignin"]["username"].value;
  if (x.length<8) {
    alert("Password must be longer than 8 digits");
    return false;
  }
}
function validateFormSearch() {
  var x = document.forms["mysignin"]["username"].value;
  if (x=="") {
    alert("Password must be longer than 8 digits");
    return false;
  }
}