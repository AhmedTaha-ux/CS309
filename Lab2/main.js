function displayNextImage() {
  const sliderContent = document.querySelector('#slider-content');
  const sliderImages = sliderContent.querySelectorAll('img');
  
  const currentImage = sliderContent.querySelector('img:not(.hidden)');
  const currentIndex = Array.from(sliderImages).indexOf(currentImage);
  
  const nextIndex = (currentIndex + 1) % sliderImages.length;
  const nextImage = sliderImages[nextIndex];
  
  currentImage.classList.add('hidden');
  nextImage.classList.remove('hidden');
}

function displayPreviousImage() {
  const sliderContent = document.querySelector('#slider-content');
  const sliderImages = sliderContent.querySelectorAll('img');
  
  const currentImage = sliderContent.querySelector('img:not(.hidden)');
  const currentIndex = Array.from(sliderImages).indexOf(currentImage);
  
  const previousIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
  const previousImage = sliderImages[previousIndex];
  
  currentImage.classList.add('hidden');
  previousImage.classList.remove('hidden');
}
