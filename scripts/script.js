function FormShow() {
  const modal = document.querySelector(".modal-overlay");
  modal.classList.add("is-open");
}

function FormClose() {
  const modal = document.querySelector(".modal-overlay");
  modal.classList.remove("is-open");
}

function BurgerShow() {
  const burger = document.querySelector(".burger-menu-modal");
  burger.classList.add("is-open");
}

function BurgerClose() {
  const burger = document.querySelector(".burger-menu-modal");
  burger.classList.remove("is-open");
}

const formShowButton = document.querySelector(".button");
const formCloseButton = document.querySelector(".modal-exit-container");
const burgerShowButton = document.querySelector(".burger-menu");
const burgerCloseButton = document.querySelector(".burger-exit-container");

formShowButton.addEventListener("click", () => {
  FormShow();
});

formCloseButton.addEventListener("click", () => {
  FormClose();
});

burgerShowButton.addEventListener("click", () => {
  BurgerShow();
});

burgerCloseButton.addEventListener("click", () => {
  BurgerClose();
});
