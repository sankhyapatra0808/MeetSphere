const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Handle signup
document.querySelector('.sign-up form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.querySelector('.sign-up input[type="text"]').value;
    const email = document.querySelector('.sign-up input[type="email"]').value;
    const password = document.querySelector('.sign-up input[type="password"]').value;

    const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    if (response.ok) {
        alert('Signup successful!');
        container.classList.remove("active");
    } else {
        alert(`Signup failed: ${data.message}`);
    }
});

// Handle login
document.querySelector('.sign-in form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.querySelector('.sign-in input[type="email"]').value;
    const password = document.querySelector('.sign-in input[type="password"]').value;

    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
        alert('Login successful!');
        // You can store the token in localStorage or redirect the user
        localStorage.setItem('token', data.token);
    } else {
        alert(`Login failed: ${data.message}`);
    }
});
