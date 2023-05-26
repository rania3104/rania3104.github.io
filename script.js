// JavaScript code for Harvard University website

// Function to toggle the mobile navigation menu
function toggleMobileMenu() {
var menu = document.getElementById("mobile-menu");
menu.classList.toggle("show");
}

// Function to display current date in the footer
function displayCurrentDate() {
var dateElement = document.getElementById("current-date");
var currentDate = new Date().toLocaleDateString();
dateElement.textContent = "Current Date: " + currentDate;
}

// Function to handle form submission
function handleSubmit(event) {
event.preventDefault();
var form = event.target;
var name = form.elements["name"].value;
var email = form.elements["email"].value;

// Perform form validation
if (!name || !email) {
    alert("Please fill in all the fields.");
    return;
}

// Process the form data (e.g., send it to a server)
// Here, we're simply displaying an alert with the submitted data
alert("Form submitted!\nName: " + name + "\nEmail: " + email);
}

// Add event listeners
window.addEventListener("DOMContentLoaded", function() {
displayCurrentDate();

var mobileMenuButton = document.getElementById("mobile-menu-button");
mobileMenuButton.addEventListener("click", toggleMobileMenu);

var form = document.getElementById("contact-form");
form.addEventListener("submit", handleSubmit);
});