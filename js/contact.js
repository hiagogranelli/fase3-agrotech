document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const messageInput = document.getElementById('message');
    const charCount = document.getElementById('charCount');

    // Update character count
    messageInput.addEventListener('input', function() {
        const remaining = 500 - this.value.length;
        charCount.textContent = remaining;
    });

    // Custom email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Custom name validation
    function isValidName(name) {
        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+\s+[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
        return nameRegex.test(name);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const message = form.elements['message'].value;
        
        let isValid = true;
        
        // Name validation
        if (!isValidName(name)) {
            form.elements['name'].classList.add('is-invalid');
            isValid = false;
        } else {
            form.elements['name'].classList.remove('is-invalid');
            form.elements['name'].classList.add('is-valid');
        }

        // Email validation
        if (!isValidEmail(email)) {
            form.elements['email'].classList.add('is-invalid');
            isValid = false;
        } else {
            form.elements['email'].classList.remove('is-invalid');
            form.elements['email'].classList.add('is-valid');
        }

        // Message validation
        if (message.length < 30 || message.length > 500) {
            form.elements['message'].classList.add('is-invalid');
            isValid = false;
        } else {
            form.elements['message'].classList.remove('is-invalid');
            form.elements['message'].classList.add('is-valid');
        }

        if (isValid) {
            // Here you would typically send the form data to your server
            console.log('Form is valid, ready to submit');
            // form.submit();
        }
    });

    // Real-time validation
    form.elements['name'].addEventListener('input', function() {
        if (isValidName(this.value)) {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
        } else {
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
        }
    });

    form.elements['email'].addEventListener('input', function() {
        if (isValidEmail(this.value)) {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
        } else {
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
        }
    });

    form.elements['message'].addEventListener('input', function() {
        if (this.value.length >= 30 && this.value.length <= 500) {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
        } else {
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
        }
    });
}); 