document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        // Reset success message
        successMessage.style.display = 'none';

        // Validate Name
        if (nameInput.value.trim() === '') {
            showError('nameError');
            isValid = false;
        } else {
            hideError('nameError');
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            showError('emailError');
            isValid = false;
        } else {
            hideError('emailError');
        }

        // Validate Subject
        if (subjectInput.value.trim() === '') {
            showError('subjectError');
            isValid = false;
        } else {
            hideError('subjectError');
        }

        // Validate Message
        if (messageInput.value.trim() === '') {
            showError('messageError');
            isValid = false;
        } else {
            hideError('messageError');
        }

        // If valid, show success message and reset form
        if (isValid) {
            successMessage.style.display = 'block';
            form.reset();
            
            // Optional: Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }
    });

    function showError(elementId) {
        document.getElementById(elementId).style.display = 'block';
    }

    function hideError(elementId) {
        document.getElementById(elementId).style.display = 'none';
    }
});
