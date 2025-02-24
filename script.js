// Smooth Scroll to Menu Section
document.getElementById("hamburger").addEventListener("click", function() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
});
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
    });
}

// Contact form interaction (simple feedback)
document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Your message has been sent successfully! Thank you for reaching out.");
});
let currentIndex = 0;
const images = [
    'images/bakery1.jpg',  // First image from the local images folder
    'images/bakery2.jpg',  // Second image from the local images folder
    'images/bakery3.jpg',  // Third image from the local images folder
    'images/bakery4.jpg'   // Fourth image from the local images folder
];

function changeBackground() {
    const hero = document.querySelector('.hero');

    hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6),   rgba(0, 0, 0, 0.6)),url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;  // Loop back to the first image
}

// Set interval for changing background every 5 seconds
setInterval(changeBackground, 5000);

// Initialize the first background image
changeBackground();