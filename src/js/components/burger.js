const burger = document.querySelector(".burger");
const btnCloseMenu = document.querySelector(".btn-close-menu");
const burgerMenu = document.querySelector(".burger-menu ");
const navLink = document.querySelectorAll(".nav__link");
const body = document.body;

burger.addEventListener("click", function () {
  body.classList.add("dis-scroll");
  burgerMenu.classList.add("burger-menu__active");
  document.getElementsByClassName("btn-search")[0].style.visibility = "hidden";
});

btnCloseMenu.addEventListener("click", function () {
  body.classList.remove("dis-scroll");
  burgerMenu.classList.remove("burger-menu__active");
  document.getElementsByClassName("btn-search")[0].style.visibility = "visible";

});

navLink.forEach(el => {
  el.addEventListener("click", function () {
    body.classList.remove("dis-scroll");
    burgerMenu.classList.remove("burger-menu__active");
    document.getElementsByClassName("btn-search")[0].style.visibility = "visible";
  });
});
