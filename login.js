document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form fields
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errormessage");

    // Check if both fields are filled
    if (!email || !password) {
        errorMessage.textContent = "Please fill out both email and password fields.";
        return;
    }

    // Clear error message if fields are filled
    errorMessage.textContent = "";

    // Show success alert and redirect to index.html
    alert("Login successful!");
    window.location.href = "index.html"; // Redirects to index.html
});
