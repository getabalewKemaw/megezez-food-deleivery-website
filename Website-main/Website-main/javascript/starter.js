/* navigation bar */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;


// dark mode toggle with localStorage
function toggleTheme() {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    themeIcon.src = isDark ? '../Images/sun.png' : '../Images/moon.png';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// initialize theme
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        body.classList.add('dark-theme');
        themeIcon.src = '../Images/sun.png';
    } else {
        body.classList.remove('dark-theme');
        themeIcon.src = '../Images/moon.png';
    }
}


themeToggle.addEventListener('click', toggleTheme);
document.addEventListener('DOMContentLoaded', initializeTheme);

// hamburger menu toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// close mobile menu on click outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && !e.target.closest('.hamburger')) {
        navLinks.classList.remove('active');
    }
});



// smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

// if(contactForm) {
//     contactForm.addEventListener('submit', async (e) => {
//         e.preventDefault();
        
//         const formData = new FormData(contactForm);
        
//         try {
//             const response = await fetch(contactForm.action, {
//                 method: 'POST',
//                 body: formData,
//                 headers: {
//                     'Accept': 'application/json'
//                 }
//             });
            
//             if(response.ok) {
//                 showNotification("'📬 Message sent successfully! We'll contact you soon.'", true);
//                 contactForm.reset();
//             } else {
//                 showNotification('❌ Error sending message. Please try again.', false);
//             }
//         } catch (error) {
//             showNotification('❌ Connection error. Please check your network.', false);
//         }
//     });
// }


/* home section */
document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typed-text", {
        strings: [
            "Welcome! to our website ",
            "Order your best food anytime.",
            "Enjoy delicious meals delivered!",
            "Fresh ingredients, made with love!",
            "Satisfy your cravings with one click."
        ],
        typeSpeed: 15, 
        backSpeed: 25,  
        loop: true,      
        showCursor: false, 
    });

    // Button Toggle for Read More
    const exploreBtn = document.getElementById('exploreBtn');
    const showLessBtn = document.getElementById('showLessBtn');
    const hiddenContent = document.querySelector('.hidden-content');

    exploreBtn.addEventListener('click', function () {
        hiddenContent.style.display = 'block';
        exploreBtn.style.display = 'none';
        showLessBtn.style.display = 'inline-block';
    });

    showLessBtn.addEventListener('click', function () {
        hiddenContent.style.display = 'none';
        showLessBtn.style.display = 'none';
        exploreBtn.style.display = 'inline-block';
    });
});



// team memebr counter 
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // lower number = faster animation

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if(count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target + '+';
            }
        }

        updateCount();
    });
}



// Trigger on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
});

observer.observe(document.querySelector('.achievement-counters'));


//  FREQUENTLY ASKED QUESTION 


// FAQ Toggle Functionality
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
        const answer = this.querySelector('.faq-answer');
        answer.style.maxHeight = answer.style.maxHeight ? null : `${answer.scrollHeight}px`;
    });
});



// JavaScript with hash detection
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about-section');
    
    function animateSection() {
        // Reset animations
        aboutSection.classList.remove('animate-in');
        void aboutSection.offsetWidth; // Trigger reflow
        
        // Add class after a small delay to allow reflow to complete
        setTimeout(() => {
            aboutSection.classList.add('animate-in');
        }, 50);
    }

    // Initial observer setup
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSection();
            }
        });
    }, { threshold: 0.1 });

    observer.observe(aboutSection);

    // Handle hash navigation
    window.addEventListener('hashchange', function() {
        if (window.location.hash === '#about') {
            // Scroll to section (if not already in view)
            aboutSection.scrollIntoView({ behavior: 'smooth' });
            animateSection();
        }
    });

    // Check initial hash
    if (window.location.hash === '#about') {
        animateSection();
    }
});