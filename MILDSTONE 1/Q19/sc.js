const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate email and password
    if (!email.includes('@') || password.length < 8) {
        message.textContent = "Invalid email or password!";
        message.className = "error";
    } else {
        message.textContent = "Valid email and password!";
        message.className = "success";
    }
});