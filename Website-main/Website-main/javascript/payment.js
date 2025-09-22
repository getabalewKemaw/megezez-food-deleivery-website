//  
document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('paymentForm');
    const deliveryYes = document.getElementById('deliveryYes');
    const deliveryNo = document.getElementById('deliveryNo');
    const deliveryDetails = document.getElementById('deliveryDetails');
    const paymentMethod = document.getElementById('paymentMethod');
    const accountDetails = document.getElementById('accountDetails');
    const accountNumber = document.getElementById('accountNumber');
    const accountError = document.getElementById('accountError');
    const successModal = document.querySelector('.success-modal');
    const modalOkBtn = document.querySelector('.modal-ok-btn');
    const notification = document.querySelector('.payment-notification');
    const notificationCloseBtn = document.querySelector('.notification-close-btn');

    // Toggle delivery details
    function toggleDeliveryDetails() {
        if (deliveryYes.checked) {
            deliveryDetails.style.display = 'block';
        } else {
            deliveryDetails.style.display = 'none';
        }
    }

    // Toggle account details based on payment method
    function toggleAccountDetails() {
        if (paymentMethod.value) {
            accountDetails.classList.remove('hidden');
        } else {
            accountDetails.classList.add('hidden');
        }
    }

    // Bank validation rules (unchanged)
    const bankRules = {
        nib: {
            pattern: /^[0-9]{13}$/,
            message: 'NIB account must be exactly 13 digits',
            example: '1000123456789'
        },
        cbe: {
            pattern: /^[0-9]{13}$/,
            message: 'CBE account must be exactly 13 digits',
            example: '1000123456789'
        },
        dashen: {
            pattern: /^1[0-9]{9}$/,
            message: 'Dashen account must be 10 digits starting with 1',
            example: '1012345678'
        },
        abisinia: {
            pattern: /^[0-9]{12}$/,
            message: 'Abisinia account must be exactly 12 digits',
            example: '123456789012'
        },
        telebirr: {
            pattern: /^[0-9]{9}$/,
            message: 'Telebirr account must be 9 digits',
            example: '912345678'
        }
    };

    // Validate account number (unchanged)
    function validateAccountNumber() {
        const value = accountNumber.value.trim();
        const method = paymentMethod.value;
        const rules = bankRules[method];
        const inputGroup = accountNumber.closest('.input-group');

        inputGroup.classList.remove('error');
        accountError.style.display = 'none';

        if (!method) {
            showError('Please select a payment method');
            return false;
        }

        if (!value) {
            showError('Account number is required');
            return false;
        }

        if (!/^\d+$/.test(value)) {
            showError('Account number must contain only numbers');
            return false;
        }

        if (rules && !rules.pattern.test(value)) {
            showError(`${rules.message} (Example: ${rules.example})`);
            return false;
        }

        return true;
    }

    function showError(message) {
        const inputGroup = accountNumber.closest('.input-group');
        inputGroup.classList.add('error');
        accountError.textContent = message;
        accountError.style.display = 'block';
        accountNumber.focus();
    }

    // Existing modal handling (unchanged)
    function showSuccessModal() {
        successModal.classList.remove('hidden');
    }

    function hideSuccessModal() {
        successModal.classList.add('hidden');
    }

    // New notification handling
    function showNotification() {
        notification.classList.remove('hidden');
    }

    function hideNotification() {
        notification.classList.add('hidden');
    }

    // Event listeners
    deliveryYes.addEventListener('change', toggleDeliveryDetails);
    deliveryNo.addEventListener('change', toggleDeliveryDetails);
    paymentMethod.addEventListener('change', toggleAccountDetails);
    accountNumber.addEventListener('input', validateAccountNumber);

    modalOkBtn.addEventListener('click', hideSuccessModal);
    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) hideSuccessModal();
    });

    notificationCloseBtn.addEventListener('click', hideNotification);
    notification.addEventListener('click', (e) => {
        if (e.target === notification) hideNotification();
    });

    // Form submission with new notification
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show new notification immediately for both pickup and delivery
        showNotification();
        // showSuccessModal();
        
        // Reset form after a short delay
        setTimeout(() => {
            paymentForm.reset();
            deliveryDetails.style.display = 'block'; // Reset to default
            accountDetails.classList.add('hidden');
        }, 500);
    });

    // Initialize
    toggleDeliveryDetails();
});
