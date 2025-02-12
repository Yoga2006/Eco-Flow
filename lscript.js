// Smooth scroll to the form section
function scrollToForm() {
    const formSection = document.getElementById('signup');
    window.scrollTo({
        top: formSection.offsetTop,
        behavior: 'smooth'
    });
}

// Handle form submission and redirect to success page
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get user input values (for demonstration)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // You can perform validation or send data to a server here
    console.log("Name: " + name);
    console.log("Email: " + email);
    
    // After successful submission, redirect to the success page
    window.location.href = 'success.html'; // Redirect to success page
});
