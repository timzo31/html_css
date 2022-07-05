"use strict";

/////////// CAROUSEL ////////////

const btnOpenCarousel = document.querySelector(".btn-open-carousel");
const modalCarousel = document.querySelector(".modal-carousel");
const overlayCar = document.querySelector(".overlay-car");
const btnCloseCarousel = document.querySelector(".btn-close-modal-carousel");

const closeCarouselModal = function () {
  modalCarousel.classList.add("hidden-car");
  overlayCar.classList.add("hidden-car");
};

const openCarouselModal = function () {
  modalCarousel.classList.remove("hidden-car");
  overlayCar.classList.remove("hidden-car");
};

btnOpenCarousel.addEventListener("click", openCarouselModal);

overlayCar.addEventListener("click", closeCarouselModal);
btnCloseCarousel.addEventListener("click", closeCarouselModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeCarouselModal();
  // e.key === "Escape" && closeCarouselModal;
});

///////////// SLIDERS CONTROL /////////////////
const btnLeft = document.querySelector(".btn-slider-left");
const btnRight = document.querySelector(".btn-slider-right");

const slides = document.querySelectorAll(".slide");
const slider = document.querySelectorAll(".slider");
slider.style.overflow = "visible";
slider.style.transform = "scale(.2) translateX(-1600px)";

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));




