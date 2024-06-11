var firstName = prompt("Input FirstName");
if (firstName == "Admin") {
  var passWord = prompt("Input Password");
  if (passWord == "TheMaster") {
    alert("Welcome");
  } else if (passWord == "null") {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (firstName == "null") {
  alert("Canceled");
} else {
  alert("I don't know you");
}
