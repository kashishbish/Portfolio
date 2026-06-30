// Hamburger Menu Functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Photo Gallery Function
function openPhotoGallery() {
    const modal = document.getElementById('photo-gallery-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Coursera Modal Function
function openCourseraModal() {
    const modal = document.getElementById('coursera-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Modal functionality for case studies
const caseStudyCards = document.querySelectorAll('.case-study-card');
const modals = document.querySelectorAll('.modal');
const modalCloseButtons = document.querySelectorAll('.modal-close');

caseStudyCards.forEach(card => {
    card.addEventListener('click', function() {
        const modalId = this.dataset.modal;
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

modalCloseButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        modals.forEach(modal => {
            if (modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
});

// Scroll Reveal Animation
const elementsToAnimate = document.querySelectorAll('.case-study-card, .skill-group, .stat-card, .principle, .timeline-item, .project-card, .cert-card');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

elementsToAnimate.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Active Navigation
window.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section[id]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '#b8a890';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#ffffff';
        }
    });
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const introImg = document.querySelector('.profile-image');
    if (introImg) {
        const scrollPosition = window.pageYOffset;
        introImg.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    }
});

// Hover Glow for cards
document.querySelectorAll('.case-study-card, .skill-group, .stat-card, .principle, .timeline-content, .project-card, .cert-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 0 30px rgba(212, 165, 116, 0.3)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '';
    });
});

// Enhanced Hamburger Menu Functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Enhanced Click-Hint Hover Effects
const clickHints = document.querySelectorAll('.click-hint');
clickHints.forEach(hint => {
    hint.addEventListener('mouseenter', function() {
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.animation = 'ripple 0.6s ease-out';
        this.parentElement.style.position = 'relative';
    });

    // Add cursor change
    hint.style.cursor = 'pointer';
});

// Photo Gallery Function
function openPhotoGallery() {
    const modal = document.getElementById('photo-gallery-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Add entrance animation
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.animation = 'slideUp 0.5s ease-out';
    }
}

// Coursera Modal Function
function openCourseraModal() {
    const modal = document.getElementById('coursera-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.animation = 'slideUp 0.5s ease-out';
    }
}

// Enhanced Modal functionality for case studies
const caseStudyCards = document.querySelectorAll('.case-study-card');
const modals = document.querySelectorAll('.modal');
const modalCloseButtons = document.querySelectorAll('.modal-close');

caseStudyCards.forEach(card => {
    card.addEventListener('click', function() {
        const modalId = this.dataset.modal;
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            const modalContent = modal.querySelector('.modal-content');
            modalContent.style.animation = 'slideUp 0.5s ease-out';
        }
    });
});

modalCloseButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        const modal = this.closest('.modal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        modals.forEach(modal => {
            if (modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
});

// Enhanced Scroll Reveal Animation
const elementsToAnimate = document.querySelectorAll('.case-study-card, .skill-group, .stat-card, .principle, .timeline-item, .project-card, .cert-card');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

elementsToAnimate.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Smooth Scrolling with enhanced animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Active Navigation with enhanced styling
window.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section[id]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '#b8a890';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#ffffff';
            link.style.textShadow = '0 0 10px rgba(212, 165, 116, 0.5)';
        } else {
            link.style.textShadow = 'none';
        }
    });
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const introImg = document.querySelector('.profile-image');
    if (introImg) {
        const scrollPosition = window.pageYOffset;
        introImg.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    }
});

// Enhanced Hover Glow for cards with golden effect
document.querySelectorAll('.case-study-card, .skill-group, .stat-card, .principle, .timeline-content, .project-card, .cert-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 15px 40px rgba(212, 165, 116, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
        card.style.transition = 'all 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '';
    });
});

// Click-hint specific enhancement
document.querySelectorAll('.click-hint').forEach(hint => {
    hint.addEventListener('mouseenter', function() {
        this.style.textShadow = '0 0 15px rgba(212, 165, 116, 0.6)';
    });
    
    hint.addEventListener('mouseleave', function() {
        this.style.textShadow = 'none';
    });
});

console.log('Portfolio enhanced with rich golden hover effects!');

console.log('Portfolio loaded');