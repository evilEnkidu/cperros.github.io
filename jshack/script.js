document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Vulnerable login logic
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});
