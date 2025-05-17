// Scroll reveal animation
document.addEventListener('DOMContentLoaded', function() {
    // Scroll reveal
    const revealElements = document.querySelectorAll('.reveal');
    
    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.8;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Check on initial load
    
    // Skill bars animation
    const skillBars = document.querySelectorAll('.skill-bar');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const progress = bar.querySelector('.skill-progress');
            const targetWidth = progress.getAttribute('data-progress') + '%';
            progress.style.width = targetWidth;
        });
    }
    
    // Initialize skill bars when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Form submission loading state
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            const spinner = document.createElement('div');
            spinner.className = 'loading-spinner';
            
            submitButton.textContent = '';
            submitButton.appendChild(spinner);
            
            // Reset button after 2 seconds (replace this with actual form submission)
            setTimeout(() => {
                submitButton.removeChild(spinner);
                submitButton.textContent = originalText;
            }, 2000);
        });
    }
});
