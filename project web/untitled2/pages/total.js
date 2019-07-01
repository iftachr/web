function validateFormSignin() {
  let x = document.forms["mysignin"]["username"].value;
  let x2 =document.forms["mysignin"]["psw"].value;
  if (x.length<6){
    alert("user name must be longer than 6");
    return  false;
  }
  if (x2.length<8) {
    alert("Password must be longer than 8 digits");
    return false;
  }
}

function validateFormSearch() {
  let y = document.forms["searchForm"]["searchInput"].value;
  if (y=="") {
    alert("search Input must not be empty");
    return false;
  }
}