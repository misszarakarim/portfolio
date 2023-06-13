
var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;

    slides[currentSlide].style.display = 'block';

    function showSlide(n) {
      slides[currentSlide].style.display = 'none';
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].style.display = 'block';
    }

    function navigateSlider(n) {
      showSlide(currentSlide + n);
    }
