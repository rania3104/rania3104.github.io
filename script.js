// JavaScript code for the Harvard University website

// Function to handle click events on the "Apply Now" button
function handleApplyNowClick(event) {
  event.preventDefault();
  // Add your logic here for handling the click event
  // For example, you can redirect the user to the application page
  window.location.href = "application.html";
}

// Event listener for the "Apply Now" button
var applyNowButton = document.querySelector(".btn");
applyNowButton.addEventListener("click", handleApplyNowClick);
  
window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset;
  document.querySelector('.hero-section').style.backgroundSize = 100 + scrollPosition / 9 + '%';
});

window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset;
  document.querySelector('.hero-content p').style.fontSize = 150 + scrollPosition / 15 + '%';
  document.querySelector('.hero-content h1').style.fontSize = 475 + scrollPosition / 5 + '%';
  document.querySelector('btn').style.fontSize = 100 + scrollPosition / 5 + '%';
});
