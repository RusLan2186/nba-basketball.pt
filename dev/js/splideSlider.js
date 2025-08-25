import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

document.addEventListener('DOMContentLoaded', () => {
  const splide = new Splide('#video-splide', {
    type: 'loop',
    perPage: 3,
    gap: '15px',
    drag: false,
    arrows: false,
    pagination: false,
    autoplay: true,
    interval: 10,       // маленький интервал вместо 0
    speed: 30000,
    easing: 'linear',
    pauseOnHover: false, // отключаем стандартный pauseOnHover
    breakpoints: {
      991: { perPage: 2 },
      499: { perPage: 1.5 },
    },
  });

  splide.mount();

  // Навешиваем hover на каждый видео слайд
  splide.Components.Elements.slides.forEach((slide) => {
    const videoItem = slide.querySelector('.video__item');
    if (videoItem) {
      videoItem.addEventListener('mouseenter', () => {
        splide.Components.Autoplay.stop(); // используем stop(), чтобы реально остановить
      });
      videoItem.addEventListener('mouseleave', () => {
        splide.Components.Autoplay.play(); // и снова запускаем
      });
    }
  });
});
