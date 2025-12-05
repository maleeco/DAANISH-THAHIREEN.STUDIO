// ============================================
// PORTFOLIO DAANISH THAHIREEN - SCRIPT.JS
// ============================================

// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // GALERIE INTERACTIVE
    // ============================================
    initGallery();
    
    // ============================================
    // FORMULAIRE NEWSLETTER
    // ============================================
    initNewsletterForm();
    
    // ============================================
    // NAVIGATION SMOOTH SCROLL
    // ============================================
    initSmoothScroll();
    
    // ============================================
    // ANIMATIONS AU SCROLL (OPTIONNEL)
    // ============================================
    initScrollAnimations();
});

// ============================================
// FONCTION : Galerie interactive
// ============================================
function initGallery() {
    const mainImage = document.querySelector('#galerie .main-photo img');
    const galleryImages = document.querySelectorAll('#galerie .gallery-item img');
    
    if (!mainImage || galleryImages.length === 0) {
        console.warn('Galerie non trouvée');
        return;
    }
    
    // Stocker l'image principale par défaut
    const defaultMainImage = mainImage.src;
    
    // Ajouter un événement de clic sur chaque image de la galerie
    galleryImages.forEach(function(img) {
        img.style.cursor = 'pointer';
        
        // Changer l'image principale au clic
        img.addEventListener('click', function() {
            // Effet de transition
            mainImage.style.opacity = '0.3';
            
            setTimeout(() => {
                mainImage.src = this.src;
                mainImage.style.opacity = '1';
            }, 200);
        });
        
        // Effet hover (optionnel)
        img.addEventListener('mouseenter', function() {
            this.style.opacity = '0.7';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
    });
    
    console.log('✓ Galerie initialisée avec succès');
}

// ============================================
// FONCTION : Formulaire Newsletter
// ============================================
function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');
    const successMessage = document.getElementById('successMessage');
    
    if (!form) {
        console.warn('Formulaire newsletter non trouvé');
        return;
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Vérifier la validité de l'email
        if (emailInput.value && emailInput.validity.valid) {
            // Afficher le message de succès
            successMessage.classList.add('show');
            
            // Enregistrer l'email (à adapter selon vos besoins)
            const email = emailInput.value;
            console.log('Nouvel abonné :', email);
            
            // Optionnel : Envoyer à un service backend
            // sendToBackend(email);
            
            // Vider le champ
            emailInput.value = '';
            
            // Masquer le message après 5 secondes
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
        } else {
            // Afficher une erreur si l'email n'est pas valide
            alert('Veuillez entrer une adresse e-mail valide.');
        }
    });
    
    console.log('✓ Formulaire newsletter initialisé');
}

// ============================================
// FONCTION : Navigation smooth scroll
// ============================================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('✓ Smooth scroll initialisé');
}

// ============================================
// FONCTION : Animations au scroll (optionnel)
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observer les sections pour les animations
    const sections = document.querySelectorAll('.intro, .container, .banner, .newsletter');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    console.log('✓ Animations au scroll initialisées');
}

// ============================================
// FONCTION : Envoyer email au backend (exemple)
// ============================================
function sendToBackend(email) {
    // Exemple d'envoi à un backend
    // À adapter selon votre configuration
    
    /*
    fetch('https://votre-api.com/newsletter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    */
}

// ============================================
// GESTION DU MENU MOBILE (optionnel)
// ============================================
function initMobileMenu() {
    // À ajouter si vous souhaitez un menu burger pour mobile
    // Code pour toggle le menu sur petits écrans
}

// ============================================
// LAZY LOADING DES IMAGES (optionnel)
// ============================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// LOG DE DÉMARRAGE
// ============================================
console.log('🎨 Portfolio Daanish Thahireen chargé');
console.log('📸 Toutes les fonctionnalités sont actives');
