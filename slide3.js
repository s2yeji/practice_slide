const slideWrap = document.querySelector('.slideWrap');
const slide = slideWrap.querySelectorAll('.slide');

let totalLength = slide.length;
let slideInterval = 2000;
let currntSlide = 0;

setInterval(() => {
  let nextSlide = (currntSlide + 1) % totalLength; // 0 1 2 0 1 2 0 1 2
  slide[currntSlide].style.opacity = '0';
  slide[nextSlide].style.opacity = '1';
  console.log(nextSlide);
  currntSlide = nextSlide;
}, slideInterval);
