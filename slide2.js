const slideWrap = document.querySelector('.slideWrap');
const slide = slideWrap.querySelectorAll('.slide');
let slideHeight = slide[0].getBoundingClientRect().height;
// let slideSizeInfo = slide[0].getBoundingClientRect();
// console.log(slideSizeInfo);
const totalLength = slide.length;
let slideInterval = 3000;
let currentSlide = 0;

console.log(totalLength);

window.addEventListener('resize', () => {
  slideHeight = slide[0].getBoundingClientRect().height;
  // console.log(slideHeight);
});

setInterval(() => {
  currentSlide < totalLength - 1 ? currentSlide++ : (currentSlide = 0);
  slideWrap.style.transform = `translateY(${-slideHeight * currentSlide}px)`;
}, slideInterval);
