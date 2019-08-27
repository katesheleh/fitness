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