// Handle login form submission
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', e => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform login authentication 
  if (authenticateUser(username, password)) {
    // Set session data indicating user is logged in.
    setLoggedInUser(username);

    // Redirect to the dashboard
    window.location.href = 'dashboard.html';
  } else {
    // Show login error message
    const errorMessage = document.getElementById('login-error-message');
    errorMessage.textContent = 'Invalid username or password.';
  }
});

// Perform login authentication 
function authenticateUser(username, password) {

  // Return true if authentication is successful, otherwise return false
  return (username === 'admin' && password === '123@pass');
}

// Set the logged-in user in session data
function setLoggedInUser(username) {
  // Set session data indicating the logged-in user 
  sessionStorage.setItem('loggedInUser', username);
}