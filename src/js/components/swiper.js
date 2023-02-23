import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,

  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
});
