import MicroModal from "micromodal";

const burger = document.querySelector(".burger-btn");
const burgerIcon = document.querySelector("use");

MicroModal.init({
  openTrigger: "data-custom-open",
  closeTrigger: "data-custom-close",
  disableScroll: true,
  awaitOpenAnimation: true,
  debugMode: false,
  disableOverlayClose: true,

  onShow() {
    burger.classList.add("is-open");
    burgerIcon.setAttribute("href", "/icon/symbol-defs.svg#icon-close");
  },

  onClose() {
    burger.classList.remove("is-open");
    burgerIcon.setAttribute("href", "/icon/symbol-defs.svg#icon-menu");
  },
});
