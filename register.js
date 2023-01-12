const registerForm = document.getElementById("register-form");
const registerEmail = document.getElementById("register-email");
const registerPassword = document.getElementById("register-password");
const registerError = document.getElementById("register-error");


// Add registration event listener
registerForm.addEventListener("submit", e => {
  e.preventDefault();

  // Get email and password values from the form
  const email = registerEmail.value;
  const password = registerPassword.value;


  // Register the user with Firebase
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      // Redirect to homepage
      window.location = 'http://127.0.0.1:5500/register.html';
    })
    .catch(error => {
      // Show error message
      registerError.textContent = error.message;
    });
});
