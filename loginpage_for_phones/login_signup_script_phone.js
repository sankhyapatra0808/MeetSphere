document.addEventListener('DOMContentLoaded', function() {
    const toggleSignup = document.getElementById('toggle-signup');
    const toggleLogin = document.getElementById('toggle-login');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginContent = document.querySelector('.form-content:not(.hidden)');
    const signupContent = document.querySelector('.form-content.hidden');
    
    toggleSignup.addEventListener('click', function() {
        loginContent.classList.add('hidden');
        signupContent.classList.remove('hidden');
    });

    toggleLogin.addEventListener('click', function() {
        signupContent.classList.add('hidden');
        loginContent.classList.remove('hidden');
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Add login functionality here
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Add signup functionality here
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const photo = document.getElementById('signup-photo').files[0];
        
        // Send data to the server
        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        if (photo) {
            formData.append('photo', photo);
        }
        
        fetch('/signup', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Signup successful!');
                window.location.href = '/login';
            } else {
                alert('Signup failed: ' + data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
