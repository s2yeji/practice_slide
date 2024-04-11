const slideWrap = document.querySelector('.slideWrap'); // ul
const slide = slideWrap.querySelectorAll('.slide'); // li
let slideWidth = slide[0].getBoundingClientRect().width; // li size
const totalLength = slide.length;
let slideInterval = 3000;
let currentSlide = 0;
let sliderClone = slide[0].cloneNode(true);
console.log(sliderClone);
slideWrap.appendChild(sliderClone);

window.addEventListener('resize', () => {
  slideWidth = slide[0].getBoundingClientRect().width;
  console.log(slideWidth);
});

setInterval(() => {
  currentSlide++;
  slideWrap.style.transition = `0.5s`;
  slideWrap.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
  if (currentSlide == totalLength) {
    setTimeout(() => {
      slideWrap.style.transition = `0s`;
      slideWrap.style.transform = `translateX(0)`;
    }, 500);
    currentSlide = 0;
  }
}, slideInterval);
