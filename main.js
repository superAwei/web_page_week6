import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

console.log("Hello world!");

const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    speed: 20000,
    loop: true,
    autoplay: {
      delay: 1
    }
  });