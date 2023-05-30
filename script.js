// Function to handle click events on the "Apply Now" button
function handleApplyNowClick(event) {
  event.preventDefault(); // Prevent the default action of the event (in this case, preventing the form submission)
  window.location.href = "application.html"; // Redirect the user to the application page
}

// Event listener for the "Apply Now" button
var applyNowButton = document.querySelector(".btn"); // Get the element with class "btn"
applyNowButton.addEventListener("click", handleApplyNowClick); // Attach a click event listener to the button, calling the handleApplyNowClick function when clicked

// Event listener for the scroll event to change the background size of the hero section
window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset; // Get the vertical scroll position
  document.querySelector('.hero-section').style.backgroundSize = 100 + scrollPosition / 15 + '%'; // Update the background size of the hero section based on the scroll position
});

// Event listener for the scroll event to change the font sizes of the hero content
window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset; // Get the vertical scroll position
  document.querySelector('.hero-content p').style.fontSize = 150 + scrollPosition / 25 + '%'; // Update the font size of the hero content paragraph based on the scroll position
  document.querySelector('.hero-content h1').style.fontSize = 475 + scrollPosition / 15 + '%'; // Update the font size of the hero content heading based on the scroll position
});

// Function to check if an element is in the viewport with a given offset percentage
function isInViewport(element, offsetPercentage) {
  var rect = element.getBoundingClientRect(); // Get the position and dimensions of the element
  var threshold = (window.innerHeight || document.documentElement.clientHeight) * (offsetPercentage / 100); // Calculate the threshold based on the offset percentage
  return (
    rect.top >= -threshold && // Check if the top of the element is within the viewport
    rect.left >= 0 && // Check if the left of the element is within the viewport
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + threshold && // Check if the bottom of the element is within the viewport
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) // Check if the right of the element is within the viewport
  );
}

// Function to animate elements on scroll
function animateElementsOnScroll() {
  var aboutSections = document.getElementsByClassName("about-section"); // Get all elements with class "about-section"
  var programsSections = document.getElementsByClassName("programs-section"); // Get all elements with class "programs-section"
  var admissionSections = document.getElementsByClassName("admission-section"); // Get all elements with class "admission-section"
  var aboutImage = document.getElementsByClassName("about-image")[0]; // Get the first element with class "about-image"

  // Loop through each about section
  for (var i = 0; i < aboutSections.length; i++) {
    var aboutSection = aboutSections[i];
    if (isInViewport(aboutSection, 90)) { // Check if the about section is in the viewport with a 90% offset
      aboutSection.classList.add("animate"); // Add the "animate" class to the about section to trigger CSS animations
      aboutImage.classList.add("animate"); // Add the "animate" class to the about image to trigger CSS animations
    }
  }

  // Loop through each programs section
  for (var j = 0; j < programsSections.length; j++) {
    var programsSection = programsSections[j];
    if (isInViewport(programsSection, 40)) { // Check if the programs section is in the viewport with a 40% offset
      programsSection.classList.add("animate"); // Add the "animate" class to the programs section to trigger CSS animations
    }
  }

  // Loop through each admission section
  for (var k = 0; k < admissionSections.length; k++) {
    var admissionSection = admissionSections[k];
    if (isInViewport(admissionSection, 30)) { // Check if the admission section is in the viewport with a 30% offset
      admissionSection.classList.add("animate"); // Add the "animate" class to the admission section to trigger CSS animations
    }
  }
}

// Event listener for the scroll event to animate elements on scroll
window.addEventListener("scroll", animateElementsOnScroll);
animateElementsOnScroll(); // Call the function once to animate elements on page load

// Event listener for the scroll event to animate the header, logo, and navigation on scroll
window.addEventListener('scroll', function() {
  var header = document.querySelector('header'); // Get the header element
  var logo = document.querySelector('.logo'); // Get the element with class "logo"
  var nav = document.querySelector('nav'); // Get the navigation element
  var aboutSection = document.querySelector('.about-section'); // Get the element with class "about-section"
  var distanceFromTop = aboutSection.offsetTop - window.innerHeight; // Calculate the distance from the top of the about section

  if (window.pageYOffset > distanceFromTop) { // Check if the scroll position is below the distance from the top of the about section
    header.classList.add('scrolled'); // Add the "scrolled" class to the header to trigger CSS changes
    logo.classList.add('scrolled'); // Add the "scrolled" class to the logo to trigger CSS changes
    nav.querySelector('ul').classList.add('scrolled'); // Add the "scrolled" class to the navigation's unordered list to trigger CSS changes
  } else {
    header.classList.remove('scrolled'); // Remove the "scrolled" class from the header
    logo.classList.remove('scrolled'); // Remove the "scrolled" class from the logo
    nav.querySelector('ul').classList.remove('scrolled'); // Remove the "scrolled" class from the navigation's unordered list
  }
});

// Event listener for the scroll event to show/hide the back to top button
window.addEventListener('scroll', function() {
  var backToTopButton = document.querySelector('.back-to-top'); // Get the element with class "back-to-top"
  if (window.scrollY > 300) { // Check if the vertical scroll position is greater than 300 pixels
      backToTopButton.classList.add('show'); // Add the "show" class to the back to top button to display it
  } else {
      backToTopButton.classList.remove('show'); // Remove the "show" class from the back to top button to hide it
  }
});

// Event listener for the click event on the back to top button
document.querySelector('.back-to-top').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent the default action of the click event (in this case, scrolling to the top of the page)
  window.scrollTo({ // Scroll to the top of the page with smooth behavior
      top: 0,
      behavior: 'smooth'
  });
});
