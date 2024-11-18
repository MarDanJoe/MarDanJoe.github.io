// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Dark Mode Toggle with localStorage
document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('#dark-mode-toggle');
    const body = document.body;
  
    // Load saved theme from localStorage or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.classList.toggle('dark-mode', savedTheme === 'dark');
    toggleSwitch.checked = savedTheme === 'dark';
  
    // Add event listener for theme toggle
    toggleSwitch.addEventListener('change', () => {
      const isDarkMode = toggleSwitch.checked;
      body.classList.toggle('dark-mode', isDarkMode);
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
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
document.getElementById('hireMeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const projectType = document.getElementById('projectType').value;

    if (!name || !email || !projectType) {
        alert('Please fill in all required fields.');
        return;
    }

    alert('Thank you for your inquiry! I will get back to you shortly.');
    this.reset();
});