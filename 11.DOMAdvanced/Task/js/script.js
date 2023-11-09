'use strict';

const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.main-nav-link');

const mainNav = document.querySelector('.main-nav');
const mainNavList = document.querySelector('.main-nav-list');
const heroTextBox = document.querySelector('.hero-textbox');
const logos = document.querySelectorAll('.logo');
const logoContainer = document.querySelector('.logo-container');
const logosImgs = logoContainer.querySelectorAll('img');
const sectionHowContainerGrid = document.querySelector(
  '.section-how .container.grid',
);
const accordion = document.querySelector('.accordion');
const sectionHero = document.querySelector('.section-hero');
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

accordion.addEventListener('click', function (e) {
  e.target.closest('.accordion-item')?.classList.toggle('open');
});

// 4

const getStickyNav = function (entries) {
  const entry = entries[0];
  document.body.classList.toggle('sticky', !entry.isIntersecting);
};
const observer = new IntersectionObserver(getStickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-80px`,
});
observer.observe(sectionHero);

// 5

class Slider {
  constructor() {
    this.minSlide = 0;
    this.maxSlide = carouselSlides.length - 1;
    this.currentSlide = 0;
  }
  generateSliderData() {
    dotContainer.innerHTML = '';
    carouselSlides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dot.dataset.slide = index;
      dotContainer.append(dot);
    });
    return this;
  }
  nextSlide() {
    this.selectSlide(
      this.currentSlide === this.maxSlide
        ? this.minSlide
        : this.currentSlide + 1,
    );
    return this;
  }
  prevSlide() {
    this.selectSlide(
      this.currentSlide === this.minSlide
        ? this.maxSlide
        : this.currentSlide - 1,
    );
    return this;
  }
  selectSlide(slide = 0) {
    this.currentSlide = slide;
    this.moveToSlide();
    this.activateCurrentDot();
    return this;
  }
  moveToSlide() {
    carouselSlides.forEach(
      (s, index) =>
        (s.style.transform = `translateX(${
          (index - this.currentSlide) * 100
        }%)`),
    );
    return this;
  }
  activateCurrentDot() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot) => {
      dot.classList.remove('dot-fill');
    });
    dots[this.currentSlide].classList.add('dot-fill');
    return this;
  }
}

const slider = new Slider();
slider.generateSliderData().selectSlide();
carouselBtnRight.addEventListener('click', slider.nextSlide.bind(slider));
carouselBtnLeft.addEventListener('click', slider.nextSlide.bind(slider));
document.addEventListener('keydown', function ({ key: k }) {
  k === 'ArrowRight' && slider.nextSlide();
  k === 'ArrowLeft' && slider.prevSlide();
});
dotContainer.addEventListener('click', function (e) {
  e.target.classList.contains('dot') &&
    slider.selectSlide(Number(e.target.dataset.slide));
});

// 6

const rand = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const getRandomRGBA = () =>
  `rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, 0.5)`;
const initGame = function () {
  const imgMin = 0;
  const imgMax = logosImgs.length - 1;
  let imgClick;

  return function ({ target }) {
    if (target.tagName !== 'IMG' || (imgClick && imgClick !== target)) {
      return;
    }
    target.style.backgroundColor = '';
    imgClick = !imgClick ? target : logosImgs[rand(imgMin, imgMax)];
    imgClick.style.backgroundColor = getRandomRGBA();
  };
};

logoContainer.addEventListener('click', initGame());

// *

const loadImages = function () {
  this.forEach((img) => {
    img.src = img.dataset.src;
  });
};
const lazyLoad = function () {
  let sectionNumber = 0;
  sectionsNotHero.forEach((section) => {
    const imgs = section.querySelectorAll('img');
    if (imgs.length <= 0) {
      return;
    }
    setTimeout(loadImages.bind(imgs), sectionNumber++ * 2000);
  });
};
lazyLoad();
