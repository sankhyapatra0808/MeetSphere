document.getElementById('send-reset-link').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    if (email) {
        alert('Password reset instructions have been sent to ' + email);
        // You can implement the actual password reset functionality here.
    } else {
        alert('Please enter your email address.');
    }
});

document.getElementById('back-to-login').addEventListener('click', function() {
    window.location.href = 'login_signup.html';
});
