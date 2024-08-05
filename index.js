window.onload = function() {
  const slides = document.querySelector(".slides");
  const slideWidth = document.querySelector(".slides img").clientWidth;
  let slideIndex = 0;

  function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.children.length) {
      slideIndex = 0;
    }
    updateSlidePosition();
  }

  function updateSlidePosition() {
    slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
  }

  setInterval(nextSlide, 2500); // Changes every 2.5 seconds
};



// Menu Mobile
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu-button');
  const menuContent = document.getElementById('menu-content');
  const mainContent = document.querySelector('main');

  menuButton.addEventListener('click', function (event) {
    event.stopPropagation();
    if (menuContent.style.display === 'block') {
      menuContent.style.display = 'none';
      mainContent.classList.remove('blur');
    } else {
      menuContent.style.display = 'block';
      mainContent.classList.add('blur');
    }
  });

  document.addEventListener('click', function (event) {
    const target = event.target;
    if (!menuContent.contains(target) && target !== menuButton) {
      menuContent.style.display = 'none';
      mainContent.classList.remove('blur');
    }
  });
});