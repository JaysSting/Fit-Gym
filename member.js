const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (nameInput.value === '' || emailInput.value === '' || passwordInput.value === '' || confirmPasswordInput.value === '') {
    errorMessage.textContent = 'All fields are required.';
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    errorMessage.textContent = 'Passwords do not match.';
  } else {
    // Form submission code here (e.g. AJAX request)
    console.log('Form submitted successfully.');
  }
});
const form = document.querySelector('#signup-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Perform form validation here, checking that all required fields are filled out correctly

    // If the form is valid, show a thank you message
    alert('Thank you for choosing us!');
  });
if (commentField.value.trim() === '') {
  // Display an error message to the user
  alert('Please enter a comment');
}