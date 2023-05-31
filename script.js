// Event listener for the scroll event to change the background size of the hero section
window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset; //This gets the vertical scroll position
  document.querySelector('.hero-section').style.backgroundSize = 100 + scrollPosition / 15 + '%'; //Updates the background size of the hero section based on the scroll position
});

// Event listener for the scroll event to change the font sizes of the hero content
window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset; //Gets the vertical scroll position
  document.querySelector('.hero-content p').style.fontSize = 150 + scrollPosition / 25 + '%'; // Updates the font size of the hero content paragraph based on the scroll position
  document.querySelector('.hero-content h1').style.fontSize = 475 + scrollPosition / 15 + '%'; // Updates the font size of the hero content heading based on the scroll position
});

// Function to check if an element is in the viewport with a given offset percentage
function isInViewport(element, offsetPercentage) {
  var rect = element.getBoundingClientRect(); //Gets the position and dimensions of the element
  var threshold = (window.innerHeight || document.documentElement.clientHeight) * (offsetPercentage / 100); // Calculates the threshold based on the offset percentage
  return (
    rect.top >= -threshold && //Checks if the top of the element is within the viewport
    rect.left >= 0 && //Checks if the left of the element is within the viewport
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + threshold && // Checks if the bottom of the element is within the viewport
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) // Checks if the right of the element is within the viewport
  );
}

// Function to animate elements on scroll
function animateElementsOnScroll() {
  var aboutSections = document.getElementsByClassName("about-section"); // Gets all elements with class "about-section"
  var programsSections = document.getElementsByClassName("programs-section"); // Gets all elements with class "programs-section"
  var admissionSections = document.getElementsByClassName("admission-section"); // Gets all elements with class "admission-section"
  var aboutImage = document.getElementsByClassName("about-image")[0]; //Gets the first element with class "about-image"

  for (var i = 0; i < aboutSections.length; i++) {
    var aboutSection = aboutSections[i];
    if (isInViewport(aboutSection, 90)) { //Checks if the about section is in the viewport with a 90% offset
      aboutSection.classList.add("animate"); //Adds the "animate" class to the about section to trigger CSS animations
      aboutImage.classList.add("animate"); //Adds the "animate" class to the about image to trigger CSS animations
    }
  }

  for (var j = 0; j < programsSections.length; j++) {
    var programsSection = programsSections[j];
    if (isInViewport(programsSection, 40)) { // Checks if the programs section is in the viewport with a 40% offset
      programsSection.classList.add("animate"); // Adds the "animate" class to the programs section to trigger CSS animations
    }
  }

  for (var k = 0; k < admissionSections.length; k++) {
    var admissionSection = admissionSections[k];
    if (isInViewport(admissionSection, 30)) { // Checks if the admission section is in the viewport with a 30% offset
      admissionSection.classList.add("animate"); // Adds the "animate" class to the admission section to trigger CSS animations
    }
  }
}

// Event listener for the scroll event to animate elements on scroll
window.addEventListener("scroll", animateElementsOnScroll);
animateElementsOnScroll(); // Calls the function once to animate elements on page load

// Event listener for the scroll event to animate the header, logo, and navigation on scroll
window.addEventListener('scroll', function() {
  var header = document.querySelector('header'); // Gets the header element
  var logo = document.querySelector('.logo'); // Gets the element with class "logo"
  var nav = document.querySelector('nav'); // Gets the navigation element
  var aboutSection = document.querySelector('.about-section'); // Gets the element with class "about-section"
  var distanceFromTop = aboutSection.offsetTop - window.innerHeight; // Calculates the distance from the top of the about section

  if (window.pageYOffset > distanceFromTop) { // Checks if the scroll position is below the distance from the top of the about section
    header.classList.add('scrolled'); 
    logo.classList.add('scrolled');
    nav.querySelector('ul').classList.add('scrolled'); // Adds the "scrolled" class to the navigation's unordered list to trigger CSS changes
  } else {
    header.classList.remove('scrolled'); 
    logo.classList.remove('scrolled'); 
    nav.querySelector('ul').classList.remove('scrolled'); // Removes the "scrolled" class from the navigation's unordered list
  }
});

// Event listener for the scroll event to show/hide the back to top button
window.addEventListener('scroll', function() {
  var backToTopButton = document.querySelector('.back-to-top'); // Gets the element with class "back-to-top"
  if (window.scrollY > 300) { // Checks if the vertical scroll position is greater than 300 pixels
      backToTopButton.classList.add('show'); // Adds the "show" class to the back to top button to display it
  } else {
      backToTopButton.classList.remove('show'); // Removes the "show" class from the back to top button to hide it
  }
});

// Event listener for the click event on the back to top button
document.querySelector('.back-to-top').addEventListener('click', function(e) {
  e.preventDefault(); // Prevents the default action of the click event (in this case, scrolling to the top of the page)
  window.scrollTo({ // Scrolls to the top of the page with smooth behavior
      top: 0,
      behavior: 'smooth'
  });
});
