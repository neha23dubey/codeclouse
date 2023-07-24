// Image pop-out effect
const images = document.querySelectorAll('.gallery img');
images.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.2)';
    image.style.zIndex = '1';
    image.style.transition = 'transform 0.3s ease';
  });

  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
    image.style.zIndex = '0';
    image.style.transition = 'transform 0.3s ease';
  });
});

// Scroll to top button
const scrollToTopButton = document.querySelector('.scroll-to-top');
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Show scroll-to-top button on scroll
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});
const sectionBInner = document.querySelector('.section-b-inner');

sectionBInner.addEventListener('mouseenter', () => {
  sectionBInner.style.transform = 'scale(1.05)';
});

sectionBInner.addEventListener('mouseleave', () => {
  sectionBInner.style.transform = 'scale(1)';
});
