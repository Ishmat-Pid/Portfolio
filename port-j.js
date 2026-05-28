window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.project-card, .expertise-card, .skill-card');

  cards.forEach((card) => {
    const position = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (position < screenPosition) {
      card.style.transform = 'translateY(-5px)';
      card.style.transition = '0.3s ease';
    }
  });
});