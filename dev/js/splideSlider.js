import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

document.addEventListener('DOMContentLoaded', () => {
  const defaultOptions = {
    type: 'loop',
    drag: false,
    arrows: false,
    pagination: false,
    speed: 0,
    easing: 'linear',
    autoScroll: { speed: 1.3, pauseOnHover: true, pauseOnFocus: true },
  };

  function initSplide(selector, customOptions = {}) {
    const element = document.querySelector(selector);
    if (!element) return; // Если элемента нет, ничего не делаем

    const options = { ...defaultOptions, ...customOptions };
    new Splide(element, options).mount({ AutoScroll });
  }

  // Инициализация слайдеров
  initSplide('#video-splide', {
    perPage: 3,
    gap: '15px',
    autoWidth: false,
    breakpoints: { 991: { perPage: 2, gap: '5px' }, 499: { perPage: 1 } },
  });

  initSplide('#player-splide', {
    gap: '0px',
    autoWidth: true,
  });
});

