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

/////////////////////////////////////////////////////
///////////////////    TEXT    //////////////////////



/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
///////////////////   BUTTONS   /////////////////////
const buttonsModal = document.querySelector(".modal_buttons");
const overlayBut = document.querySelector(".overlay-but");
const btnCloseModalButtons = document.querySelector(".btn_close_modal-buttons");
const btnOpenModalButtons = document.querySelector(".btn-open-modal-buttons");

const openModalButton = function (e) {
  e.preventDefault();
  buttonsModal.classList.remove("hidden-but");
  overlayBut.classList.remove("hidden-but");
};

const closeButtonModal = function () {
  buttonsModal.classList.add("hidden-but");
  overlayBut.classList.add("hiddenbut");
};

btnOpenModalButtons.addEventListener("click", openModalButton);

overlayBut.addEventListener("click", closeButtonModal);
btnCloseModalButtons.addEventListener("click", closeButtonModal);


/////////////////////////////////////////////////////