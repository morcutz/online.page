/* MORRUBARBER - MAIN INTERACTION SCRIPT */

// Filter Gallery Items
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.filter-chip');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Add to Cart Simple Alert / Modal Trigger
function addToCart(productName) {
    alert(`¡${productName} añadido a tu pedido! Puedes retirarlo directamente en el local durante tu turno.`);
}

// Optimization: Disable Background Video on Slow Connections
document.addEventListener('DOMContentLoaded', () => {
    if ('connection' in navigator) {
        if (navigator.connection.saveData || navigator.connection.effectiveType.includes('2g')) {
            const video = document.querySelector('.hero-video-bg');
            if (video) video.remove();
        }
    }
});