'use strict';

(function() {

  var header = document.querySelector('.main-header');
  var burger = document.querySelector('.burger');
  var btn = document.querySelector('.main-header__toggler');

  if (!header || !btn) {
    return;
  }

  var onClickHeader = function(evt) {
    var activeElement = evt.target;
    if (activeElement.classList.contains('menu__link')) {
      header.classList.remove('main-header--open');
      burger.classList.remove('burger--close');
      header.removeEventListener('click', onClickHeader);
    }
  };

  var onClickBtn = function(evt) {
    evt.preventDefault();
    header.classList.toggle('main-header--open');
    burger.classList.toggle('burger--close');
    if (header.classList.contains('main-header--open')) {
      header.addEventListener('click', onClickHeader);
    } else {
      header.removeEventListener('click', onClickHeader);
    }
  };

  btn.addEventListener('click', onClickBtn);

})();
