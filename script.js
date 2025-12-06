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
