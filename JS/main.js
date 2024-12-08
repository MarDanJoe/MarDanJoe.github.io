// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Scrollspy
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('href').includes(current)) {
            li.classList.add('active');
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle with localStorage
    const toggleSwitch = document.querySelector('#dark-mode-toggle');
    const body = document.body;
  
    // Load saved theme from localStorage or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.classList.toggle('dark-mode', savedTheme === 'dark');
    toggleSwitch.checked = savedTheme === 'light';
  
    // Add event listener for theme toggle
    toggleSwitch.addEventListener('change', () => {
        const isDarkMode = !toggleSwitch.checked;
        body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
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

    const options = {
        threshold: 0.5
    };

    const animateSkillBar = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.querySelector('.progress');
                const width = progress.getAttribute('data-skill-level');
                progress.style.width = width + '%';
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    };

    const observer = new IntersectionObserver(animateSkillBar, options);

    skillBars.forEach(skillBar => {
        observer.observe(skillBar);
        const progress = skillBar.querySelector('.progress');
        progress.style.width = '0%'; // Reset initial width
        progress.setAttribute('data-skill-level', progress.style.width); // Store the skill level
    });







    window.addEventListener('load', animateSkills);

    // Form Validation and Progress Bar for Hire Me Form
    const hireMeForm = document.getElementById('hireMeForm');
    if (hireMeForm) {
        const requiredFields = hireMeForm.querySelectorAll('input[required], select[required], textarea[required]');
        const progressBar = document.createElement('div');
        progressBar.classList.add('form-progress-bar');
        hireMeForm.insertBefore(progressBar, hireMeForm.firstChild);

        function updateProgress() {
            let filledFields = 0;
            requiredFields.forEach(field => {
                if (field.value.trim() !== '') {
                    filledFields++;
                }
            });
            const progress = (filledFields / requiredFields.length) * 100;
            progressBar.style.width = progress + '%';
        }

        requiredFields.forEach(field => {
            field.addEventListener('input', updateProgress);
        });

        hireMeForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Validate form fields
            let formValid = true;
            requiredFields.forEach(field => {
                if (field.value.trim() === '') {
                    formValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            if (!formValid) {
                alert('Please fill in all required fields.');
                return;
            }
            const successModal = document.getElementById('successModal');
            const closeButton = successModal.querySelector('.close-button');

            function showModal() {
            successModal.style.display = 'block';
            }

            function closeModal() {
            successModal.style.display = 'none';
            }

            closeButton.addEventListener('click', closeModal);
            // Success message
            showModal();
            this.reset();
            updateProgress(); // Reset progress bar
        });
        

        // Conditional Fields
        const projectTypeSelect = document.getElementById('projectType');
        const budgetFieldGroup = document.getElementById('budget').parentElement;
        const timelineFieldGroup = document.getElementById('timeline').parentElement;


        function toggleConditionalFields() {
            if (projectTypeSelect.value === 'fullstack') {
                budgetFieldGroup.classList.add('show');
                timelineFieldGroup.classList.add('show');
            } else {
                budgetFieldGroup.classList.remove('show');
                timelineFieldGroup.classList.remove('show');
            }
        }

        projectTypeSelect.addEventListener('change', toggleConditionalFields);
        toggleConditionalFields(); // Initialize on page load
    }
}); 

