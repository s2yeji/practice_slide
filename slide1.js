const slideWrap = document.querySelector('.slideWrap');
const slide = slideWrap.querySelectorAll('.slide');
let slideWidth = slide[0].getBoundingClientRect().width;
const totalLength = slide.length;
let slideInterval = 3000;
let currentSlide = 0;

console.log(totalLength);

window.addEventListener('resize', () => {
  slideWidth = slide[0].getBoundingClientRect().width;
  console.log(slideWidth);
});

setInterval(() => {
  currentSlide < totalLength - 1 ? currentSlide++ : (currentSlide = 0);
  // slideWrap.style.left = `${currentSlide * -100}%`;
  // left 혹은 margin-left 혹은 transform도 사용할 수 있음
  slideWrap.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
}, slideInterval);
