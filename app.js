// Get the modal
var account = document.getElementById("account");

// Get the button that opens the modal
var loginBtn = document.getElementById("login");
var signinBtn = document.getElementById("signin");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
loginBtn.onclick = function() {
  account.style.display = "block";
}

signinBtn.onclick = function() {
  account.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  account.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == userInfo) {
    account.style.display = "none";
  }
}