// Scroll Reveal Animation
const elementsToAnimate = document.querySelectorAll('.work-item, .cert-card, .timeline-entry, .scattered-item, .skill-bubble');

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
        link.style.color = '#e0e0e0';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#00d4ff';
        }
    });
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const introImg = document.querySelector('.img-intro');
    if (introImg) {
        const scrollPosition = window.pageYOffset;
        introImg.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    }
});

// Hover Glow
document.querySelectorAll('.work-item, .cert-card, .scattered-item, .timeline-entry').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.3)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '';
    });
});

// Certificate Modal - IMPROVED PDF Support
function openCertModal(title, filename) {
    const modal = document.getElementById('certModal');
    const frame = document.getElementById('certFrame');
    
    // Check if it's a PDF
    if (filename.endsWith('.pdf')) {
        // For PDFs, open in a new tab or use embed
        frame.innerHTML = `<embed src="${filename}" type="application/pdf" width="100%" height="100%" />`;
    } else {
        // For images, use img tag
        frame.innerHTML = `<img src="${filename}" style="width: 100%; height: 100%; object-fit: contain;" />`;
    }
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    console.log('📄 Viewing:', filename);
}

function closeCertModal() {
    const modal = document.getElementById('certModal');
    const frame = document.getElementById('certFrame');
    
    modal.style.display = 'none';
    frame.innerHTML = '';
    document.body.style.overflow = 'auto';
}

// Close on outside click
document.addEventListener('click', function(event) {
    const modal = document.getElementById('certModal');
    if (modal && event.target === modal) {
        closeCertModal();
    }
});

// Close on Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeCertModal();
    }
});

console.log('✅ Portfolio loaded with animations!');