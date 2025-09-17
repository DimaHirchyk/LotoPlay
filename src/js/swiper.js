import Swiper from "swiper";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperGallery = new Swiper(".swiper", {
  modules: [Navigation, Autoplay],
  speed: 1000,
  loop: true,
  wrapperClass: "list-gallery",
  slideClass: "item-gallery",
  spaceBetween: 50,
  resistanceRatio: 0,
  watchOverflow: true,

  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  navigation: {
    enabled: true,
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
