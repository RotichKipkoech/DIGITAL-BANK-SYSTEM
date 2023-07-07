// Wait for the DOM content to be loaded before executing the code
document.addEventListener('DOMContentLoaded', function () {
  // Get the contact form element
  const contactForm = document.getElementById('contactForm');

  // Add an event listener for the form submission
  contactForm.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values of the form fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Clear the form fields after submission
    contactForm.reset();

    // Show a message to the user indicating successful submission
    alert('Thank you for your message, ' + firstName + '! We will get back to you soon.');
  });
});
