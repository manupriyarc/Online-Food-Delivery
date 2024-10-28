document.getElementById('settingsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate inputs (optional, can add more validations as needed)
    if (name && email && password) {
        alert("Settings updated successfully!");

        // Here, you would send the data to the server if needed
        // Example: sendDataToServer(name, email, password);

        // Clear the form fields after submission
        document.getElementById('settingsForm').reset();
    } else {
        alert("Please fill out all fields.");
    }
    window.location="index.html";
});
