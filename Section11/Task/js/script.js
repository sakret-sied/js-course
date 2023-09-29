'use strict';

const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.main-nav-link');

const mainNavList = document.querySelector('.main-nav-list');
const heroTextBox = document.querySelector('.hero-textbox');
const logos = document.querySelectorAll('.logo');
const logoContainer = document.querySelector('.logo-container');
const logosImgs = logoContainer.querySelectorAll('img');
const sectionHowContainerGrid = document.querySelector(
  '.section-how .container.grid',
);
const accordion = document.querySelector('.accordion');
const sectionsNotHero = document.querySelectorAll('section:not(.section-hero)');
const carousel = document.querySelector('.carousel');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const carouselBtnRight = document.querySelector('.carousel-btn--right');
const carouselBtnLeft = document.querySelector('.carousel-btn--left');
const dotContainer = document.querySelector('.dot-container');

document
  .querySelector('.btn-mobile-nav')
  .addEventListener('click', function () {
    header.classList.toggle('nav-open');
  });

navLinks.forEach((link) => {
  link.addEventListener('click', function () {
    header.classList.remove('nav-open');
  });
});

// 1

const scroolSmooth = function (e) {
  e.preventDefault();
  const target = e.target;
  if (!target.classList.contains(this)) {
    return;
  }
  const href = target.getAttribute('href');
  document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
};

mainNavList.addEventListener('click', scroolSmooth.bind('main-nav-link'));
heroTextBox.addEventListener('click', scroolSmooth.bind('btn'));

logos.forEach((logo) => {
  logo.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.scrollIntoView({ behavior: 'smooth' });
  });
});

// 2

sectionHowContainerGrid.addEventListener('click', function (e) {
  const stepImgBox = e.target.closest('.step-img-box');
  if (!stepImgBox) {
    return;
  }
  const isPrevTextBox =
    stepImgBox.previousElementSibling.classList.contains('step-text-box');
  const stepTextBox = isPrevTextBox
    ? stepImgBox.previousElementSibling
    : stepImgBox.nextElementSibling;
  stepTextBox.classList.toggle('shadow');
});

// 3

// 4

accordion.addEventListener('click', function (e) {
  e.target.closest('.accordion-item')?.classList.toggle('open');
});

// 5

// 6

const loadImages = function (entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    return;
  }
  const target = entry.target;
  target.querySelectorAll('img').forEach((img) => {
    img.src = img.dataset.src;
  });
  observer.unobserve(target);
};
const lazyImagesObserver = new IntersectionObserver(loadImages, {
  root: null,
  threshold: 0.1,
  rootMargin: '100px',
});

sectionsNotHero.forEach((section) => {
  lazyImagesObserver.observe(section);
});

// 7

const minSlide = 0;
const maxSlide = carouselSlides.length - 1;
let currentSlide = 0;

const generateSliderData = function () {
  dotContainer.innerHTML = '';
  carouselSlides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.dataset.slide = index;
    dotContainer.append(dot);
  });
};
const selectSlide = function (slide = 0) {
  currentSlide = slide;
  moveToSlide();
  activateCurrentDot();
};
const moveToSlide = function () {
  carouselSlides.forEach(
    (s, index) =>
      (s.style.transform = `translateX(${(index - currentSlide) * 100}%)`),
  );
};
const activateCurrentDot = function () {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot) => {
    dot.classList.remove('dot-fill');
  });
  dots[currentSlide].classList.add('dot-fill');
};
const nextSlide = function () {
  selectSlide(currentSlide === maxSlide ? minSlide : currentSlide + 1);
};
const prevSlide = function () {
  selectSlide(currentSlide === minSlide ? maxSlide : currentSlide - 1);
};

generateSliderData();
selectSlide();
carouselBtnRight.addEventListener('click', nextSlide);
carouselBtnLeft.addEventListener('click', prevSlide);
document.addEventListener('keydown', function ({ key: k }) {
  k === 'ArrowRight' && nextSlide();
  k === 'ArrowLeft' && prevSlide();
});
dotContainer.addEventListener('click', function (e) {
  const t = e.target;
  t.classList.contains('dot') && selectSlide(Number(t.dataset.slide));
});

// 8

const logosMin = 0;
const logosMax = logosImgs.length - 1;
let logosImgClick;

const getRand = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const getRandomRGBA = () =>
  `rgb(${getRand(0, 255)}, ${getRand(0, 255)}, ${getRand(0, 255)}, 0.5)`;

logoContainer.addEventListener('click', function (e) {
  const target = e.target;
  if (target.tagName !== 'IMG' || (logosImgClick && logosImgClick !== target)) {
    return;
  }
  target.style.backgroundColor = '';
  logosImgClick = logosImgs[getRand(logosMin, logosMax)];
  logosImgClick.style.backgroundColor = getRandomRGBA();
});