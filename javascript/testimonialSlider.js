// Testimonial slider
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const arrowLeft = document.getElementById('arrowLeftBtn');
const arrowRight = document.getElementById('arrowRightBtn');

const testimonialSlider = document.querySelector('.testimonial-slider');

let testimonialCurrentSlide = 0;

function showSlide(index) {
  const totalSlides = testimonialSlides.length;

  if (index >= totalSlides) {
    testimonialCurrentSlide = 0; // Go back to the first slide
  } else if (index < 0) {
    testimonialCurrentSlide = totalSlides - 1; // Go to the last slide
  } else {
    testimonialCurrentSlide = index;
    // console.log("current Slide", testimonialCurrentSlide);
  }
const slideWidth = testimonialSlides[0].clientWidth;
console.log('slideWidth information: ', slideWidth);
  const offset = -testimonialCurrentSlide * slideWidth;
  testimonialSlider.style.transform = `translateX(${offset}px)`; // Move the slider
}

arrowLeft.addEventListener('click', () => {
  showSlide(testimonialCurrentSlide - 1);
});

arrowRight.addEventListener('click', () => {
  showSlide(testimonialCurrentSlide + 1);
});

// Initialize the first slide on page load
showSlide(testimonialCurrentSlide);

// Adjust slider width based on number of slides
// const testimonialSlider = document.querySelector('.testimonial-slider');
testimonialSlider.style.width = `${testimonialSlides.length * 100}%`; // Set the width of the slider container to fit all slides
testimonialSlides.forEach(slide => {
  slide.style.width = `${100 / testimonialSlides.length}%`; // Ensure each slide takes up an equal part of the container
});

// Recalculate slide width on window resize
window.addEventListener('resize', () => {
  const slideWidth = testimonialSlides[0].clientWidth; // Recalculate slide width
  testimonialSlider.style.transform = `translateX(${-testimonialCurrentSlide * slideWidth}px)`; // Adjust the slider position
});