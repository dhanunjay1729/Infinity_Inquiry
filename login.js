document.getElementById("loginButton").addEventListener("click", function() {
    const email = document.getElementById("typeEmailX").value;
    const password = document.getElementById("typePasswordX").value;

    if (email && password) {
        const users = [
            { email: "user@example.com", password: "password123" }
        ];

        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            alert("Login successful!");
        } else {
            alert("Invalid email or password.");
        }
    } else {
        alert("Please enter both email and password.");
    }
});
