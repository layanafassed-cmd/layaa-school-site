// Get the current year
document.getElementById("year").textContent = new Date().getFullYear();


// Contact form
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const success = document.getElementById("success");

    // Clear old messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    success.textContent = "";

    let valid = true;

    // Check name
    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        valid = false;
    }

    // Check email
    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        valid = false;
    }

    // Check message
    if (message.value.trim() === "") {
        messageError.textContent = "Please enter a message.";
        valid = false;
    }

    // If everything is filled
    if (valid) {
        success.textContent = "Message sent successfully! ♡";
        form.reset();
    }
});