"use strict";

///////////// SLIDERS CONTROL /////////////////

// const slider = function () {
  const slides = document.querySelectorAll(".slide");

  // const slider = document.querySelector(".slider");

  const btnLeft = document.querySelector(".btn_slider-left");
  const btnRight = document.querySelector(".btn_slider-right");

  const dotContainer = document.querySelector(".dots");

  // slider.style.transform = "scale(.2) translateX(-1600px)";

  let curSlide = 0;
  const maxSlide = slides.length;

  // Create slider dots
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="dot" data-slide="${i}"></div>`
      );
    });
  };

  // Active dot function
  const activeDot = function (slide) {
    document
      .querySelectorAll(".dot")
      .forEach((dot) => dot.classList.remove("dot-active"));

    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add("dot-active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activeDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activeDot(curSlide);
  };

  // Initialization code
  const init = function () {
    goToSlide(0);
    createDots(0);
    activeDot();
  };

  init();

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
  //KEY EVENTS TO MOVE THE SLIDER
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      prevSlide();
    }
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activeDot(slide);
    }
  });
// };
// slider();
