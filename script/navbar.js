/* =======================================
Change navbar color on scroll past hero
======================================= */
const myNav = document.querySelector(".navbar");

window.onscroll = function () {
  if (window.scrollY > window.innerHeight) {
    myNav.classList.add("scrolled");
  } else {
    myNav.classList.remove("scrolled");
  }
};