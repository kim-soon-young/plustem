document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header");
  var headerTop = document.querySelector(".header__top");
  var headerBottom = document.querySelector(".header__bottom");

  window.addEventListener("scroll", function () {
    if (window.scrollY > headerTop.clientHeight) {
      headerTop.style.display = "none";
      headerBottom.style.position = "fixed";
      headerBottom.style.top = "0";
    } else {
      headerTop.style.display = "block";
      headerBottom.style.position = "static";
    }
  });
});
