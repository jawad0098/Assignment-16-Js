function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");

    // Toggle the type attribute between "password" and "text"
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}