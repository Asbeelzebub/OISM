// login.js


// Get form elements
const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginError = document.getElementById("login-error");

// Add login event listener
loginForm.addEventListener("submit", e => {
  e.preventDefault();

  // Get email and password values from the form
  const email = loginEmail.value;
  const password = loginPassword.value;

  // Sign in the user with Firebase
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      // Redirect to homepage
      window.location = "http://127.0.0.1:5500/Isma.html";
    })
    .catch(error => {
      // Show error message
      loginError.textContent = error.message;
    });
});

