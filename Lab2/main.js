// Get all images
const sliderImages = document.querySelector('#slider-content').querySelectorAll('img');

// Hide all images but the first
sliderImages.forEach((image, index) => {
  if (index !== 0) {
    image.classList.add('hidden');
  }
});


function displayNextImage() {
  const currentImageIndex = sliderImages.findIndex((image) => !image.classList.contains('hidden')); 
  const nextImageIndex = (currentImageIndex + 1) % sliderImages.length;
  if (nextImageIndex === sliderImages.length) {
    nextImageIndex = 0;
  }
  sliderImages[currentImageIndex].classList.add('hidden');
  sliderImages[nextImageIndex].classList.remove('hidden');
}


function displayPreviousImage() {
  const currentImageIndex = sliderImages.findIndex((image) => !image.classList.contains('hidden'));
  const previousImageIndex = (currentImageIndex - 1 + sliderImages.length) % sliderImages.length;
  if (previousImageIndex === -1) {
    previousImageIndex = sliderImages.length - 1;
  }
  sliderImages[currentImageIndex].classList.add('hidden');
  sliderImages[previousImageIndex].classList.remove('hidden');
}