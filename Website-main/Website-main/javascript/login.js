

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const authModal = document.getElementById('authModal');
    const loginBtn = document.querySelector('.login-btn');
    const closeBtn = document.getElementById('closeBtn');
    const notification = document.getElementById('globalNotification');
    const authContainer = document.querySelector('.auth-container');
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const showSignUp = document.getElementById('showSignUp');
    const showSignIn = document.getElementById('showSignIn');

    /* admin credential */
    const ADMIN_CREDENTIALS = {
        email: "admin@gmail.com",
        password: "admin12345",
        name: "Admin",
        phone: "0000000000",
        gender: "Other"
    };
    // Show Auth Modal
    loginBtn.addEventListener('click', () => {
        authModal.style.display = 'flex';
        authContainer.classList.add('active');
        showForm(signInForm);
    });

    // Close Modal
    closeBtn.addEventListener('click', hideModal);
    window.addEventListener('click', (e) => e.target === authModal && hideModal());

    // Form Switching
    showSignUp.addEventListener('click', () => showForm(signUpForm));
    showSignIn.addEventListener('click', () => showForm(signInForm));

    // Sign Up Handler
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();
        
        const formData = {
            name: document.getElementById('fullName').value.trim(),
            gender: document.getElementById('gender').value,
            email: document.getElementById('signupEmail').value.trim().toLowerCase(),
            password: document.getElementById('signupPassword').value.trim(),
            phone: document.getElementById('phone').value.trim(),
        };

        if (!validateSignUp(formData)) return;

        localStorage.setItem(formData.email, JSON.stringify(formData));
        localStorage.setItem('currentUser', JSON.stringify(formData));
        showNotification('🎉 Registration successful! Redirecting...', true);
        setTimeout(() => window.location.href = '../HTML/starter.html', 2000);
    });

     // Sign In Handler (updated with admin check)
     signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();
        
        const email = document.getElementById('loginEmail').value.trim().toLowerCase();
        const password = document.getElementById('loginPassword').value.trim();

        // Check for admin login first
        if (email === ADMIN_CREDENTIALS.email) {
            if (password === ADMIN_CREDENTIALS.password) {
                // Admin login successful
                localStorage.setItem('currentUser', JSON.stringify(ADMIN_CREDENTIALS));
                showNotification(' Admin login successful! Redirecting...', true);
                setTimeout(() => window.location.href = '../HTML/admin.html', 1500);
                return;
            } else {
                showFieldError('loginPassword', 'Incorrect admin password');
                return;
            }
        }

        

        // Regular user login
        const user = JSON.parse(localStorage.getItem(email));
        if (!validateSignIn(email, password, user)) return;

        localStorage.setItem('currentUser', JSON.stringify(user));
        showNotification(' Login successful! Redirecting...', true);
        setTimeout(() => window.location.href = '../HTML/user.html', 1500);
    });


    // Helper Functions
    function showForm(form) {
        [signInForm, signUpForm].forEach(f => f.classList.remove('active'));
        form.classList.add('active');
        authContainer.classList.add('active');
        clearErrors();
    }

    function hideModal() {
        authModal.style.display = 'none';
        authContainer.classList.remove('active');
        clearErrors();
    }

    function clearErrors() {
        document.querySelectorAll('.error-text').forEach(el => el.remove());
        document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
        });
    }

    function validateSignUp(data) {
        let isValid = true;

        // Name validation
        if (!data.name || data.name.length < 2) {
            showFieldError('fullName', 'Please enter a valid name (min 2 characters)');
            isValid = false;
        }
        
        // Gender validation
        if (data.gender === "") {
            showFieldError('gender', 'Please select your gender');
            isValid = false;
        }
        
        // Email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            showFieldError('signupEmail', 'Please enter a valid email address');
            isValid = false;
        } else if (localStorage.getItem(data.email)) {
            showFieldError('signupEmail', 'Email already registered');
            isValid = false;
        }
        
        // Password validation
        if (data.password.length < 6) {
            showFieldError('signupPassword', 'Password must be 6+ characters');
            isValid = false;
        }
        
        // Phone validation
        if (!/^\d{10}$/.test(data.phone)) {
            showFieldError('phone', 'Invalid phone number (10 digits required)');
            isValid = false;
        }
        
        return isValid;
    }

    function validateSignIn(email, password, user) {
        if (!email) {
            showFieldError('loginEmail', 'Please enter your email');
            return false;
        }
        
        if (!password) {
            showFieldError('loginPassword', 'Please enter your password');
            return false;
        }
        
        if (!user || user.password !== password) {
            showFieldError('loginPassword','Invalid  email  or  password');
    
            return false;
        }
        
        return true;
    }

    function showFieldError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const formGroup = field.closest('.form-group');
        
        formGroup.classList.add('error');
        
        const errorElement = document.createElement('div');
        errorElement.className = 'error-text';
        errorElement.textContent = message;
        formGroup.appendChild(errorElement);
    }

    function showNotification(message, isSuccess) {
        notification.classList.remove('show', 'error');
        
        notification.innerHTML = `
            <i class="fas ${isSuccess ? 'fa-check-circle' : 'fa-exclamation-triangle'}"></i>
            ${message}
        `;
        
        notification.className = `global-notification ${isSuccess ? '' : 'error'}`;
        
        void notification.offsetWidth;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
});