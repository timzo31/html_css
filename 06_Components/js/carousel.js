"use strict";

/////////// CAROUSEL ////////////

const carouselModal = document.querySelector(".carousel-modal");
const controlLeft = document.querySelector(".chevron-left");
const controlRight = document.querySelector(".chevron-right");
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





