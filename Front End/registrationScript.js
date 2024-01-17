document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
  
    registrationForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Perform AJAX request to send registration data to the server
      fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          hobbies,
        }),
      })
        .then(response => response.json())
        .then(data => {
          alert(data.message);
          registrationForm.reset();
        })
        .catch(error => console.error('Error:', error));
    });
  });
  