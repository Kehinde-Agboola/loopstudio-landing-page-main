"use strict";

// navbar buttons variables
const hamburger = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");

// navbar variables
const navBar = document.querySelector(".navbar-nav");

// navbar toggle
const navbarToggle = () => navBar.classList.toggle("active");
console.log("taiye");

// added toggle function on navBar buttons
hamburger.addEventListener("click", navbarToggle);
closeBtn.addEventListener("click", navbarToggle);
