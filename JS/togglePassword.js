function togglePassword(elementId) {
  var password = document.getElementById(elementId);
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}
