document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const bookingForm = document.getElementById('bookingForm');
    const confirmationPopup = document.querySelector('.confirmation-popup');
    const popupCloseBtn = document.querySelector('.popup-close-btn');
    
    // Set minimum date to today
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    document.getElementById('bookDate').min = `${yyyy}-${mm}-${dd}`;
    
    // Form submission
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('bookName').value;
        const date = document.getElementById('bookDate').value;
        const time = document.getElementById('bookTime').value;
        const guests = document.getElementById('bookGuests').value;
        
        // Format date
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
        
        // Format time
        const formattedTime = new Date(`2000-01-01T${time}:00`).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
        
        // Update popup
        document.getElementById('popupName').textContent = name;
        document.getElementById('popupDate').textContent = formattedDate;
        document.getElementById('popupTime').textContent = formattedTime;
        document.getElementById('popupGuests').textContent = 
            guests === '1' ? '1 person' : 
            guests === '2' ? '2 people' : 
            guests === '3-4' ? '3-4 people' : 
            guests === '5-6' ? '5-6 people' : '7+ people';
        
        // Show popup
        confirmationPopup.classList.add('active');
        
        // Reset form
        bookingForm.reset();
    });
    
    // Close popup
    popupCloseBtn.addEventListener('click', function() {
        confirmationPopup.classList.remove('active');
    });
    
    confirmationPopup.addEventListener('click', function(e) {
        if (e.target === confirmationPopup) {
            confirmationPopup.classList.remove('active');
        }
    });
    
    // Add confetti effect
    function createConfetti() {
        const confetti = document.querySelector('.confetti');
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'confetti-particle';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
            particle.style.animationDelay = Math.random() + 's';
            particle.style.backgroundColor = `hsl(${Math.random() * 60 + 30}, 100%, 50%)`;
            confetti.appendChild(particle);
        }
    }
    
    // Initialize
    createConfetti();
});