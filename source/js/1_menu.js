'use strict';

(function() {

  var header = document.querySelector(".main-header");
  var burger = document.querySelector(".burger");
  var btn = document.querySelector(".main-header__toggler");
  var mainHeaderOpen = document.querySelector("main-header--open");
  var burgerClose = document.querySelector("burger--close");

  if (!header || !btn) {
    return;
  }

  var onClickHeader = function(evt) {
    var activeElement = evt.target;
    if (activeElement.classList.contains("menu__link")) {
      header.classList.remove(mainHeaderOpen);
      burger.classList.remove(burgerClose);

      header.removeEventListener('click', onClickHeader);
    }
  };

  var onClickBtn = function(evt) {
    evt.preventDefault();
    header.classList.toggle("main-header--open");
    burger.classList.toggle("burger--close");

    if (header.classList.contains("main-header--open")) {
      header.addEventListener('click', onClickHeader);
    } else {
      header.removeEventListener('click', onClickHeader);
    }
  };

  btn.addEventListener('click', onClickBtn);

})();
