'use strict';

(function() {
  var dotsArea = document.querySelectorAll(".slider__btn-wrap")[0];
  var slides = document.querySelectorAll(".slider__item");
  var dots = document.querySelectorAll(".slider__btn-item");
  var prew = document.querySelector(".slider__toggles-btn--prev");
  var next = document.querySelector(".slider__toggles-btn--next");
  var sliderRadioActive = "slider__btn-active";
  var slideIndex = 1;

  var showSlides = function(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    };
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.remove(sliderRadioActive);
    };
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add(sliderRadioActive);
  };

  showSlides(slideIndex);

  var onNextClick = function() {
    showSlides(slideIndex += 1);
  };

  var onPrewClick = function() {
    showSlides(slideIndex -= 1);
  };


  var currentSlide = function(n) {
    showSlides(slideIndex = n);
  };

  var onDotsClick = function(evt) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (evt.target.classList.contains('slider__btn-item') && evt.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  };


  next.addEventListener('click', onNextClick);
  prew.addEventListener('click', onPrewClick);
  dotsArea.addEventListener('click', onDotsClick);

})();
