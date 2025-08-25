document.addEventListener('DOMContentLoaded', () => {
  // Коллапс: показываем только заголовок
  const setCollapsed = (content) => {
    const head = content.querySelector('.res__head');
    content.style.maxHeight = head ? head.offsetHeight + 'px' : '0px';
    content.classList.remove('open-spoiler');
  };

  // Раскрытие: показываем всё содержимое
  const setExpanded = (content) => {
    content.style.maxHeight = content.scrollHeight + 'px';
    content.classList.add('open-spoiler');
  };

  // Переключение
  const toggleAccordion = (e) => {
    const currentContent = e.currentTarget.closest('.results__content');
    if (!currentContent) return;

    // Закрыть остальные
    document.querySelectorAll('.results__content.open-spoiler').forEach(c => {
      if (c !== currentContent) setCollapsed(c);
    });

    if (currentContent.classList.contains('open-spoiler')) {
      setCollapsed(currentContent);
    } else {
      setExpanded(currentContent);
    }
  };

  // Инициализация высот
  const initHeights = () => {
    document.querySelectorAll('.results__content').forEach(content => {
      if (content.classList.contains('open-spoiler')) {
        setExpanded(content);
      } else {
        setCollapsed(content);
      }
    });
  };

  // Запуск
  const initAccordion = () => {
    document.querySelectorAll('.res__head').forEach(head => {
      head.addEventListener('click', toggleAccordion);
    });

    // Открыть первый спойлер
    const first = document.querySelector('.results__content');
    if (first) {
      first.classList.add('open-spoiler');
      setExpanded(first);
    }

    initHeights();
  };

  initAccordion();
  window.addEventListener('resize', initHeights);
});
