import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

document.addEventListener('DOMContentLoaded', () => {
  const splide = new Splide('#video-splide', {
    type: 'loop',
    perPage: 3,
    gap: '15px',
    drag: false,
    arrows: false,
    pagination: false,
    autoWidth: false, // можно убрать perPage если нужен автоширина
    speed: 0,
    easing: 'linear',
    autoScroll: {
      speed: 1.5,
      pauseOnHover: true,
      pauseOnFocus: true,
    },
    breakpoints: {
      991: { perPage: 2,   gap: '5px', },
      499: { perPage: 1 },
    },
  });

  splide.mount({ AutoScroll });

});



