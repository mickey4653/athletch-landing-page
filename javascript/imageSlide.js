let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;
let dots = document.querySelectorAll('.dot'); // Select all dots
const sliderContainer = document.querySelector('.slider');
let slideInterval;  // To store the interval for automatic sliding

// console.log("slide Container", sliderContainer);


// Update dot indicator for active slide
function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
  }

// Function to update slide position
function updateSlidePosition() {
    const slidesContainer = document.querySelector('.slides');
  const slideWidth =  slides[0].clientWidth;
//   console.log(" slides populated: ",slides[0]);
  slidesContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
//   slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
updateDots(); // Update the dots when the slide changes
}



// Function to go to the next slide
function goToNextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlidePosition();
  resetSlideInterval(); // Reset the interval whenever manual navigation is used
}

// Function to go to the previous slide
function goToPrevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
  resetSlideInterval(); // Reset the interval whenever manual navigation is used
}

// Auto-slide every 4 seconds
function startSlideShow() {
  slideInterval = setInterval(goToNextSlide, 4000);
}

// Reset the slideshow timer after manual navigation
function resetSlideInterval() {
  clearInterval(slideInterval); // Stop the current interval
  startSlideShow(); // Start a new interval
}

// Pause the slideshow when mouse enters the slider
sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });
  
  // Resume the slideshow when mouse leaves the slider
  sliderContainer.addEventListener('mouseleave', startSlideShow);

// Event listeners for buttons
document.getElementById('nextBtn').addEventListener('click', goToNextSlide);
document.getElementById('prevBtn').addEventListener('click', goToPrevSlide);

// Start the slideshow on page load
startSlideShow();

// Make the slider update its width on window resize
window.addEventListener('resize', updateSlidePosition);

// make mobile swipe support
let startX;

sliderContainer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

sliderContainer.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX > endX + 50) {
    goToNextSlide(); // Swipe left to go to next slide
  } else if (startX < endX - 50) {
    goToPrevSlide(); // Swipe right to go to previous slide
  }
});


