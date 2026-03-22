

const regForm = document.getElementById("registerForm");

if (regForm) {

  regForm.addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
      alert("All fields are required");
      return;
    }
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
      alert("Enter valid email");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Registration successful");

  });

}

const loginForm = document.getElementById("loginForm");

if (loginForm) {

  loginForm.addEventListener("submit", function(e) {

    e.preventDefault();

    let loginEmail = document.getElementById("loginEmail").value.trim();
    let loginPassword = document.getElementById("loginPassword").value.trim();

    if (loginEmail === "" || loginPassword === "") {
      alert("All fields required");
      return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!loginEmail.match(emailPattern)) {
      alert("Enter valid email");
      return;
    }

    if (loginPassword.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    alert("Login successful");

  });

}