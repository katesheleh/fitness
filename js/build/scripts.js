var menuHamburger = (function() {

  var menuHamburger = {
    init: function() {

      var menuControl = document.querySelector(".js-menu-control"),
        menu = document.querySelector(".js-menu");

      menuControl.addEventListener("click", function(ev) {
        ev.preventDefault();
        document.body.classList.toggle("mobile-menu-opened");
      }, false);
    }
  };

  return menuHamburger;
}());
var popupWindow = (function() {

  var popupWindow = {
    init: function() {

      var openPopup = document.querySelector(".form__submit");
      var popupWindow = document.querySelector(".popup");
      var closePopup = popupWindow.querySelector(".popup__close");
      var form = document.querySelector(".form");
      var userName = form.querySelector("[name=name]");
      var userEmail = form.querySelector("[name=email_address]");


      openPopup.addEventListener("click", function(event) {
        event.preventDefault();
        if (!userName.value || !userEmail.value) {
          event.preventDefault();
          form.classList.remove("form--error");
          form.offsetWidth = form.offsetWidth;
          form.classList.add("form--error");
        } else {
          popupWindow.classList.add("popup--js-show");
        }
      });

      closePopup.addEventListener("click", function(event) {
        event.preventDefault();
        popupWindow.classList.remove("popup--js-show");
      })

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popupWindow.classList.contains("popup--js-show")) {
            popupWindow.classList.remove("popup--js-show");
          }
        }
      });
    }
  };

  return popupWindow;
}());

  document.querySelector('.nav-menu') && menuHamburger.init();
  document.querySelector('.popup') && popupWindow.init();
// delete the comments from this file.

// write here a list of modules. Follow the example

// a file for production is created in js/build/script.js. !!!DON'T CHANGE THE FILE for production MANUALY.

// Use a command GRUNT CONCAT
