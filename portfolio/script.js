/**
 * Portfolio - JavaScript
 * Étudiant en Systèmes Informatiques et Génie Logiciel
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialisation des fonctionnalités
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initTypingEffect();
    initScrollAnimations();
    initCounterAnimation();
    initSkillBars();
    initBackToTop();
    initFormValidation();
});

/**
 * Navigation - Effet de scroll
 */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Highlight du lien actif
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Menu mobile
 */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (!menuBtn || !navLinks) return;
    
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Fermer le menu au clic sur un lien
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Fermer le menu au clic hors
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

/**
 * Smooth Scroll
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Effet de machine à écrire
 */
function initTypingEffect() {
    const typedText = document.getElementById('typedText');
    
    if (!typedText) return;
    
    const texts = [
        'Développeur Web',
        'Étudiant en SIGL',
        'Passionné Tech',
        'Créateur d\'Applications'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typedText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typedText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause à la fin
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause avant le prochain mot
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Démarrer l'effet après un délai
    setTimeout(type, 1000);
}

/**
 * Animations au scroll
 */
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    if (fadeElements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(el => observer.observe(el));
}

/**
 * Animation des compteurs
 */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    if (counters.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => observer.observe(counter));
}

/**
 * Animation des barres de compétences
 */
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    if (skillBars.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width');
                
                setTimeout(() => {
                    bar.style.width = `${width}%`;
                }, 200);
                
                observer.unobserve(bar);
            }
        });
    }, {
        threshold: 0.3
    });
    
    skillBars.forEach(bar => observer.observe(bar));
}

/**
 * Bouton retour en haut
 */
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (!backToTop) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Validation du formulaire de contact
 */
function initFormValidation() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset erreurs
        resetErrors();
        
        // Validation
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        
        // Nom
        if (!name.value.trim()) {
            showError(name, 'Le nom est requis');
            isValid = false;
        } else if (name.value.trim().length < 2) {
            showError(name, 'Le nom doit contenir au moins 2 caractères');
            isValid = false;
        }
        
        // Email
        if (!email.value.trim()) {
            showError(email, 'L\'email est requis');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Veuillez entrer un email valide');
            isValid = false;
        }
        
        // Sujet
        if (!subject.value.trim()) {
            showError(subject, 'Le sujet est requis');
            isValid = false;
        } else if (subject.value.trim().length < 3) {
            showError(subject, 'Le sujet doit contenir au moins 3 caractères');
            isValid = false;
        }
        
        // Message
        if (!message.value.trim()) {
            showError(message, 'Le message est requis');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError(message, 'Le message doit contenir au moins 10 caractères');
            isValid = false;
        }
        
        // Soumission
        if (isValid) {
            submitForm(form);
        }
    });
    
    // Validation en temps réel
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            const errorElement = this.parentElement.querySelector('.form-error');
            if (errorElement && errorElement.textContent) {
                validateField(this);
            }
        });
    });
}

/**
 * Validation d'un champ
 */
function validateField(field) {
    const errorElement = field.parentElement.querySelector('.form-error');
    
    if (!errorElement) return true;
    
    if (!field.value.trim()) {
        errorElement.textContent = 'Ce champ est requis';
        return false;
    }
    
    if (field.type === 'email' && !isValidEmail(field.value)) {
        errorElement.textContent = 'Veuillez entrer un email valide';
        return false;
    }
    
    if (field.id === 'name' && field.value.trim().length < 2) {
        errorElement.textContent = 'Le nom doit contenir au moins 2 caractères';
        return false;
    }
    
    if (field.id === 'subject' && field.value.trim().length < 3) {
        errorElement.textContent = 'Le sujet doit contenir au moins 3 caractères';
        return false;
    }
    
    if (field.id === 'message' && field.value.trim().length < 10) {
        errorElement.textContent = 'Le message doit contenir au moins 10 caractères';
        return false;
    }
    
    errorElement.textContent = '';
    return true;
}

/**
 * Afficher une erreur
 */
function showError(field, message) {
    const errorElement = field.parentElement.querySelector('.form-error');
    if (errorElement) {
        errorElement.textContent = message;
    }
    field.style.borderColor = '#ef4444';
}

/**
 * Reset des erreurs
 */
function resetErrors() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, textarea');
    const errorElements = form.querySelectorAll('.form-error');
    
    inputs.forEach(input => {
        input.style.borderColor = '';
    });
    
    errorElements.forEach(error => {
        error.textContent = '';
    });
}

/**
 * Validation email
 */
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Soumission du formulaire
 */
function submitForm(form) {
    const statusElement = document.getElementById('formStatus');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Désactiver le bouton
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    
    // Simulation d'envoi (à remplacer par votre logique réelle)
    setTimeout(() => {
        // Succès
        statusElement.textContent = 'Message envoyé avec succès ! Je vous répondrai bientôt.';
        statusElement.className = 'form-status success';
        
        // Réinitialiser le formulaire
        form.reset();
        
        // Réactiver le bouton
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer le message';
        
        // Effacer le message après 5 secondes
        setTimeout(() => {
            statusElement.textContent = '';
            statusElement.className = 'form-status';
        }, 5000);
        
    }, 1500);
}

/**
 * Défilement fluide pour les liens internes
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    
    if (section) {
        const offsetTop = section.offsetTop - 80;
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Export pour debugging
window.portfolioUtils = {
    scrollToSection,
    validateField,
    isValidEmail
};
