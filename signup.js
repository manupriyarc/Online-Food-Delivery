// scriptsignup.js

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Check if all required fields are filled
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const address = document.getElementById("address").value.trim();
        const phone = document.getElementById("phone").value.trim();

        if (!name || !email || !password || !address || !phone) {
            alert("Please fill out all required fields.");
            return;
        }

        // Show success message
        alert("SignUp successful");

        // Redirect to index.html after alert is closed
        window.location.href = "index.html";
    });
});

