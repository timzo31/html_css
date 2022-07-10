// function checkFlexGap() {
//   var flex = document.createElement("div");
//   flex.style.display = "flex";
//   flex.style.flexDirection = "column";
//   flex.style.rowGap = ".1rem";

//   flex.appendChild(document.createElement("div"));
//   flex.appendChild(document.createElement("div"));
// }

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//  MAKE MOBILE NAVIGATION WORK
const btnNavEl = document.querySelector(".btn-mobile-nav");
const navOpen = document.querySelector(".nav-open");
const headerEl = document.querySelector(".header");


btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});


