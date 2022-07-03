"use strict";

/////////// CAROUSEL ////////////

const carouselModal = document.querySelector(".carousel-modal");
const dots = document.querySelector(".modal_dots");
const dot = document.querySelectorAll("modal_dot");
const dotActive = document.querySelector(".modal_dot--active");

// const btnCloseModalCarousel = document.querySelector(
//   ".btn-close-modal-carousel"
// );

////////////MODAL OPEN-CLOSE
const modalCarousel = document.querySelector(".modal-carousel");
const overlayCar = document.querySelector(".overlay-car");
const btnCloseModal = document.querySelector(".btn-close-modal-carousel");
const btnOpenCarouselModal = document.querySelector(".btn-open-carousel");

const openModalCarousel = function () {
  overlayCar.classList.remove("hidden-car");
  modalCarousel.classList.remove("hidden-car");
};

const closeModalCarousel = function () {
  overlayCar.classList.add("hidden-car");
  modalCarousel.classList.add("hidden-car");
};

document.addEventListener("click", function (e) {
  if (e.key === "Escape") {
    closeModalCarousel();
  }
});

overlayCar.addEventListener("click", closeModalCarousel);
btnCloseModal.addEventListener("click", closeModalCarousel);
btnOpenCarouselModal.addEventListener("click", function (e) {
  e.preventDefault();
  openModalCarousel();
});

///////////// SLIDERS CONTROL /////////////////
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector("sliders");

const btnLeft = document.querySelector(".chevron-left");
const btnRight = document.querySelector(".chevron-right");

let curSlide = 0;
maxSlide = slides.length;

slider.style.transform = "scale(.5) translateX(-800px)";
slider.style.overflow = "visible";

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

//Next Slide
btnRight.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
});



