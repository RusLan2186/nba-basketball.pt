document.querySelectorAll('.player-stat__progress').forEach(progress => {
  const lineActive = progress.querySelector('.progress__line_active');
  const value = progress.querySelector('.progress__value');
  if (lineActive && value) {
    const percent = parseInt(value.textContent);
    lineActive.style.width = percent + '%';
  }
});



