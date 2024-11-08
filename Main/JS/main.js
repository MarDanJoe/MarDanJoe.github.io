// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Dark Mode Toggle
const toggleSwitch = document.querySelector('#dark-mode-toggle');
const body = document.body;

toggleSwitch.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});

// Initialize AOS
AOS.init({
    duration: 1200,
    once: true,
});

// Typed.js Initialization
const typed = new Typed('.typed-text', {
    strings: ['Danny Ambrose', 'a Software Developer', 'a Problem Solver', 'an Innovator'],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
});

// Skill Bars Animation
const skillBars = document.querySelectorAll('.skill-bar');

function animateSkills() {
    skillBars.forEach(skill => {
        const progress = skill.querySelector('.progress');
        const width = progress.style.width;
        progress.style.width = '0%';
        setTimeout(() => {
            progress.style.width = width;
        }, 100);
    });
}

window.addEventListener('load', animateSkills);
