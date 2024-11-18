// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Wrap DOM-dependent code inside DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle with localStorage
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

