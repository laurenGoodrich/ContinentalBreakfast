document.querySelectorAll('.clickable-image').forEach(image => {
    image.addEventListener('click', () => {
      const funFact = image.nextElementSibling;
      funFact.style.display = funFact.style.display === 'none' ? 'block' : 'none';
    });
  });