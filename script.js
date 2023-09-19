formTitle = document.getElementById("form-title");
confirmPasswordContainer = document.getElementById("confirm-password-container");
submitButton = document.getElementById("submit");
toggleLink = document.getElementById("toggle-link");
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

function toggleAuth() {
  const isLoginForm = formTitle.textContent === "Login";
  formTitle.textContent = isLoginForm ? "Sign Up" : "Login";
  submitButton.textContent = isLoginForm ? "Sign Up" : "Login";
  toggleLink.textContent = isLoginForm ? "Login" : "Sign Up";
  confirmPasswordContainer.style.display = isLoginForm ? "block" : "none";
}

const users = [];

function login(username, password) {
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    alert('Successful login!');
  } else {
    alert('User not found, Please sign up first.');
  }
}

function signUp(username, password, confirmPassword) {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (password !== confirmPassword) {
    alert("Password don't match");
  } else if (!username) {
    alert('Username cannot be empty.');
  } else if (!password) {
    alert('Password cannot be empty.');
  } else if (!passwordPattern.test(password)) {
    alert('Password must mix of upper and lower case, numbers, special characters and at least 8 characters.')
  } else if (username.length < 5) {
    alert('Username must at least 6 characters.')
  } else {
    users.push({ username: username, password: password });
    alert('Sign up successful! You can now log in.');
    toggleAuth();
  }
}

function handleSubmit() {
  const isLoginForm = formTitle.textContent === 'Login';
  const username = usernameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (isLoginForm) {
    login(username, password);
  } else {
    signUp(username, password, confirmPassword);
  }
}