// Hero Section/////
const btncloseHero = document.querySelector(".btn_close_modal-hero");
const modalHero = document.querySelector(".modal_hero");
const btnOpenHero = document.querySelector(".btn-open-modal-hero");

const closeModalHero = function () {
  modalHero.classList.add("hidden");
};

const openModalHero = function (e) {
  e.preventDefault();
  modalHero.classList.remove("hidden");
};

btncloseHero.addEventListener("click", closeModalHero);
btnOpenHero.addEventListener("click", openModalHero);
