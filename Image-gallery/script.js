const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const caption = document.getElementById('caption');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0;

// Open the lightbox when a gallery item is clicked
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        openLightbox(index);
    });
});

// Close  lightbox 
closeBtn.addEventListener('click', closeLightbox);


lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

//  previous image
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateLightbox();
    }
});

//  next image
nextBtn.addEventListener('click', () => {
    if (currentIndex < galleryItems.length - 1) {
        currentIndex++;
        updateLightbox();
    }
});

// Open selected image
function openLightbox(index) {
    lightbox.style.display = 'block';
    currentIndex = index;
    updateLightbox();
}

// Close 
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Updatecontent
function updateLightbox() {
    const selectedImage = galleryItems[currentIndex].querySelector('img');
    const selectedCaption = galleryItems[currentIndex].getAttribute('data-caption');
    lightboxContent.src = selectedImage.src;
    caption.textContent = selectedCaption;
}
