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
 
//for the background image
window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset;
  document.querySelector('.hero-section').style.backgroundSize = 100 + scrollPosition / 15 + '%';
});

window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset;
  document.querySelector('.hero-content p').style.fontSize = 150 + scrollPosition / 25 + '%';
  document.querySelector('.hero-content h1').style.fontSize = 475 + scrollPosition / 15 + '%';
});


//the about-section
function isInViewport(element, offsetPercentage) {
  var rect = element.getBoundingClientRect();
  var threshold = (window.innerHeight || document.documentElement.clientHeight) * (offsetPercentage / 100);
  return (
    rect.top >= -threshold &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + threshold &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateElementsOnScroll() {
  var aboutSections = document.getElementsByClassName("about-section");
  var programsSections = document.getElementsByClassName("programs-section");
  var admissionSections = document.getElementsByClassName("admission-section");
  var aboutImage = document.getElementsByClassName("about-image")[0];

  for (var i = 0; i < aboutSections.length; i++) {
    var aboutSection = aboutSections[i];
    if (isInViewport(aboutSection, 90)) {
      aboutSection.classList.add("animate");
      aboutImage.classList.add("animate");
    }
  }

  for (var j = 0; j < programsSections.length; j++) {
    var programsSections = programsSections[j];
    if (isInViewport(programsSections, 40)) {
      programsSections.classList.add("animate");
    }
  }

  for (var j = 0; j < admissionSections.length; j++) {
    var admissionSections = admissionSections[j];
    if (isInViewport(admissionSections, 30)) {
      admissionSections.classList.add("animate");
    }
  }

}

window.addEventListener("scroll", animateElementsOnScroll);
animateElementsOnScroll();


// JavaScript code for scroll-in animation of the logo
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var logo = document.querySelector('.logo');
  var nav = document.querySelector('nav');
  var aboutSection = document.querySelector('.about-section');
  var distanceFromTop = aboutSection.offsetTop - window.innerHeight;
  
  if (window.pageYOffset > distanceFromTop) {
    header.classList.add('scrolled');
    logo.classList.add('scrolled');
    nav.querySelector('ul').classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
    logo.classList.remove('scrolled');
    nav.querySelector('ul').classList.remove('scrolled');
  }
});

// Back to Top Button Functionality
window.addEventListener('scroll', function() {
  var backToTopButton = document.querySelector('.back-to-top');
  if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
  } else {
      backToTopButton.classList.remove('show');
  }
});

document.querySelector('.back-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});
