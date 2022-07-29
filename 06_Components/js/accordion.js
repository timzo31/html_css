"use strict";

///////// ACCORDION //////////
const modal = document.querySelector(".modal");
const modalAccordion = document.querySelector(".modal-accordion");
const accordion = document.querySelector(".accordion");
const overlay = document.querySelector(".overlay");

const itemActive = document.querySelector(".item-active");
const hiddenBox = document.querySelector(".hidden-box");
const btnCloseModalAccordion = document.querySelector(
  ".btn-close-modal-accordion"
);
const btnsOpenModal = document.querySelectorAll(".btn-open-modal");

const btnOpenModalAcc = document.querySelector(".btn-open-modal--acc");

//--------------------------------------------
// OPEN MODAL
const openModalAccordion = function () {
  overlay.classList.remove("hidden");
  modalAccordion.classList.remove("hidden");
};

const closeModalAccordion = function (e) {
  overlay.classList.add("hidden");
  modalAccordion.classList.add("hidden");
};

btnOpenModalAcc.addEventListener("click", function (e) {
  e.preventDefault();
  openModalAccordion();
});

btnCloseModalAccordion.addEventListener("click", closeModalAccordion);
overlay.addEventListener("click", closeModalAccordion);

document.addEventListener("keydown", function (e) {
  // If the modal contains the class "hidden"
  if (e.key === "Escape" && !modalAccordion.classList.contains("hidden")) {
    closeModalAccordion();
  }
});

// EVENT LISTENNER ON ACCORDION ITEMS (items)
const items = document.querySelectorAll(".item");

// for (let i = 0; i < items.length; i++) {
//   items[i].addEventListener("click", function () {
//     items[i].classList.add("item-active");
//   });
// }
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function (e) {
    const clicked = e.target.closest(".item");
    console.log(clicked);

    if (!clicked) return;

    // Active Item
    items.forEach((itm) => itm.classList.remove("item-active"));
    clicked.classList.add("item-active");
  });
}
///////////////////////////////////////////////////

// 


//////////////////////////////////////////////////////////////////
// Related to accordion.html
///////////////////////////////
