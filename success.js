// Smooth scroll to the form section
function scrollToForm() {
    const formSection = document.getElementById('signup');
    window.scrollTo({
        top: formSection.offsetTop,
        behavior: 'smooth'
    });
}

// Handle form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get user input values (for demonstration)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Simulate form submission (you can add validation or AJAX here)
    console.log("Name: " + name);
    console.log("Email: " + email);
    
    // Hide the form and show the success message
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
});
