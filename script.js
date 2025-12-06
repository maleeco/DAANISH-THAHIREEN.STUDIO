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
        / Effet hover (optionnel)
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

