"use strict";

const hamburgerEl = document.querySelector(".hamburger");
const navListEl = document.querySelector(".nav__container");
const closeEl = document.querySelector(".close");

hamburgerEl.addEventListener("click", function () {
  let hamburger = this;
  navListEl.classList.toggle("show");
  closeEl.classList.toggle("show");
  hamburger.classList.toggle("hide");
});

closeEl.addEventListener("click", function () {
  let closeBtn = this;
  navListEl.classList.toggle("show");
  hamburgerEl.classList.toggle("hide");
  closeBtn.classList.toggle("show");
});
