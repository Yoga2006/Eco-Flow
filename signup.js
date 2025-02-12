// JavaScript for form validation
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission
  
    // Get input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    // Validation logic
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    // Form is valid
    alert('Sign-up successful!');
    // You can submit the form here or send data to server
  });
  