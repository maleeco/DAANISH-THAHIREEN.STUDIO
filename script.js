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
