const slideWrap = document.querySelector('.slideWrap'); // ul
const slide = slideWrap.querySelectorAll('.slide'); // li
let slideWidth = slide[0].getBoundingClientRect().width;
const totalLength = slide.length;
let slideInterval = 2000;
let currentSlide = 0;
const btnNext = document.querySelector('.btnNext');
const btnPrev = document.querySelector('.btnPrev');

let nextSlide = () => {
  let firstEl = slideWrap.firstElementChild;
  slideWrap.style.transition = `0.3s`;
  slideWrap.style.transform = `translateX(${-slideWidth}px)`;
  slideWrap.addEventListener(
    'transitionend',
    () => {
      slideWrap.appendChild(firstEl);
      slideWrap.style.transition = `0s`;
      slideWrap.style.transform = `translateX(0)`;
    },
    { once: true }
  );
};

let prevSlide = () => {
  let lastEl = slideWrap.lastElementChild;
  slideWrap.prepend(lastEl);
  slideWrap.style.transform = `translateX(${-slideWidth}px)`;
  slideWrap.style.transition = `0s`;
  requestAnimationFrame(() => {
    slideWrap.style.transition = `0.3s`;
    slideWrap.style.transform = `translateX(0)`;
  });
};

let nextSlideInterval = setInterval(nextSlide, slideInterval);

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', () => {
  clearInterval(nextSlideInterval);
  prevSlide();
  nextSlideInterval = setInterval(nextSlide, slideInterval);
});

// setInterval(() => {
//   // 1. 0.3초간 ul이 왼쪽 방향으로 slide의 넓이만큼 이동한다.
//   // 2. 첫 번째 slide를 ul의  마지막 요소로 이동한다.
//   // 3. ul의 위치를 초기화한다.
//   let firstEl = slideWrap.firstElementChild;
//   slideWrap.style.transition = `0.3s`;
//   slideWrap.style.transform = `translateX(${-slideWidth}px)`;
//   setTimeout(() => {
//     slideWrap.appendChild(firstEl);
//     slideWrap.style.transition = `0s`;
//     slideWrap.style.transform = `translateX(0)`;
//   }, 300);
// }, slideInterval);

// setInterval(() => {
//   // 1. ul의 마지막 자식 li가 첫 번째로 이동
//   // 2. ul은 slide의 넓이만큼 왼쪽으로 빠져 있는 상태로 대기
//   // 3. ul이 초기값 즉, transform: translate가 0이 되는 부분만 transition을 적용한다.
//   // - translateX(0) transition = 0.3s
//   let lastEl = slideWrap.lastElementChild;
//   slideWrap.prepend(lastEl);
//   slideWrap.style.transform = `translateX(${-slideWidth}px)`;
//   slideWrap.style.transition = `0s`;
//   setTimeout(() => {
//     slideWrap.style.transition = `0.3s`;
//     slideWrap.style.transform = `translateX(0px)`;
//   });
// }, slideInterval);
