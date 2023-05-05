const trainers = document.querySelectorAll('.trainer');

trainers.forEach(trainer => {
  trainer.addEventListener('mouseenter', () => {
    trainer.style.backgroundColor = '#f5f5f5';
  });
  
  trainer.addEventListener('mouseleave', () => {
    trainer.style.backgroundColor = '';
  });
});
