document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header");
  var headerTop = document.querySelector(".header__top");
  var headerBottom = document.querySelector(".header__bottom");

  window.addEventListener("scroll", function () {
    if (window.scrollY > headerTop.clientHeight) {
      headerTop.style.height = "0";
      headerBottom.style.position = "fixed";
      headerBottom.style.top = "0";
    } else {
      headerTop.style.height = "170px"; // 또는 다른 초기 높이 값으로 설정
      headerBottom.style.position = "static";
    }
  });
});
