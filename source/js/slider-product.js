'use strict';

(function() {
  var product = document.querySelector(".product");
  var productSlider = product.querySelector(".product__slider");
  var buttonPrevious = product.querySelector(".product__slider-btn--prev");
  var buttonNext = product.querySelector(".product__slider-btn--next");

  var productSwiper = new Swiper(productSlider, {
    loop: true,
    slidesPerView: 2.844,
    spaceBetween: 17,
    centeredSlides: true,

    breakpoints: {

      768: {
        slidesPerView: 'auto',
        spaceBetween: 0,
      },

      1139: {
        spaceBetween: 17,
        slidesPerView: 1.1527,
      },
    },

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrevious
    },

  });

})();
