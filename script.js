// ============================================
// HAMBURGER MENU FUNCTIONALITY
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
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

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// ============================================
// PHOTO GALLERY FUNCTION
// ============================================
function openPhotoGallery() {
    const modal = document.getElementById('photo-gallery-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// ============================================
// COURSERA MODAL FUNCTION
// ============================================
function openCourseraModal() {
    const modal = document.getElementById('coursera-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// ============================================
// MODAL FUNCTIONALITY FOR CASE STUDIES
// ============================================
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

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
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

// ============================================
// SMOOTH SCROLLING
// ============================================
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

// ============================================
// ACTIVE NAVIGATION
// ============================================
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

// ============================================
// PARALLAX EFFECT
// ============================================
window.addEventListener('scroll', () => {
    const introImg = document.querySelector('.profile-image');
    if (introImg) {
        const scrollPosition = window.pageYOffset;
        introImg.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    }
});

// ============================================
// HOVER GLOW FOR CARDS
// ============================================
document.querySelectorAll('.case-study-card, .skill-group, .stat-card, .principle, .timeline-content, .project-card, .cert-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 15px 40px rgba(212, 165, 116, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
        card.style.transition = 'all 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '';
    });
});

// ============================================
// CLICK-HINT HOVER EFFECTS
// ============================================
document.querySelectorAll('.click-hint').forEach(hint => {
    hint.addEventListener('mouseenter', function() {
        this.style.textShadow = '0 0 15px rgba(212, 165, 116, 0.6)';
    });
    
    hint.addEventListener('mouseleave', function() {
        this.style.textShadow = 'none';
    });
});

console.log('Portfolio loaded successfully!');