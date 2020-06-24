$(document).ready(function () {
  $(".header__menu-burger ").click(function (event) {
    $(".header__menu-burger,.burger,.burger-button,.logo").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
