const carousel = document.getElementById('image-carousel');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carousel.childElementCount) % carousel.childElementCount;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carousel.childElementCount;
    updateCarousel();
  });

  carousel.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carousel.childElementCount;
    updateCarousel();
  });

  function updateCarousel() {
    const newTransformValue = -currentIndex * 300 + 'px';
    carousel.style.transform = 'translateX(' + newTransformValue + ')';
  }