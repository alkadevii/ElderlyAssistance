document.addEventListener("DOMContentLoaded", () => {
    // Function to check if the user is logged in
    function isLoggedIn() {
        // Example: Check if a token exists in localStorage
        return localStorage.getItem("userToken") !== null; // Replace with your actual logic
    }

    // Add event listener to the "Profile" link
    const profileLink = document.getElementById("profile-link");

    if (profileLink) {
        profileLink.addEventListener("click", (event) => {
            // Check if the user is logged in
            if (!isLoggedIn()) {
                // If not logged in, prevent the default link behavior and redirect to login page
                event.preventDefault();
                window.location.href = "login.html"; // Redirect to login page
            }
        });
    }

    // Redirect user to dashboard if they are already logged in
    if (isLoggedIn()) {
        window.location.href = "dashboard.html"; // Replace with your actual dashboard page
    }

    // Add event listener to the login form submission (if any)
    const loginForm = document.querySelector("form");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            // Your login logic goes here (e.g., validate credentials, authenticate user)
            // After successful login, set a token or session and redirect to dashboard
            localStorage.setItem("userToken", "your-auth-token"); // Store token in localStorage (example)
            window.location.href = "dashboard.html"; // Redirect to dashboard
        });
    }
});
