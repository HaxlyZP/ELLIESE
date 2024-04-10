    // JavaScript for automatic showcase with delay
    let currentSlide = 0;
    const slides = document.querySelectorAll('.property-item');

    function showSlide() {
      // Hide all slides
      slides.forEach(slide => {
        slide.style.display = 'none';
      });

      // Show current slide
      slides[currentSlide].style.display = 'block';

      // Move to next slide
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0; // Reset to the first slide
      }

      // Repeat after 4 seconds (4000 milliseconds)
      setTimeout(showSlide, 4000);
    }

    // Initially show the first slide
    showSlide();