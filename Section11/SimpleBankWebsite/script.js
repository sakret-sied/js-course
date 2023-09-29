'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const closeModalWindowBtn = document.querySelector('.btn--close-modal-window');
const openModalWindowBtns = document.querySelectorAll(
  '.btn--show-modal-window',
);
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContents = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const slider = document.querySelector('.slider');
const dotContainer = document.querySelector('.dots');

const openModalWindow = function (e) {
  e.preventDefault();
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

openModalWindowBtns.forEach((button) =>
  button.addEventListener('click', openModalWindow),
);

closeModalWindowBtn.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindow();
  }
});

// Scrolling

btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Smooth navigation

document
  .querySelector('.nav__links')
  .addEventListener('click', function ({ target: t }) {
    e.preventDefault();
    if (!t.classList.contains('nav__link')) {
      return;
    }
    const href = t.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  });

// Tabs

tabContainer.addEventListener('click', function ({ target: t }) {
  const clickedButton = t.closest('.operations__tab');
  if (!clickedButton) {
    return;
  }

  const operationsTabActive = 'operations__tab--active';
  tabs.forEach((tab) => tab.classList.remove(operationsTabActive));
  clickedButton.classList.add(operationsTabActive);

  const operationsContentActive = 'operations__content--active';
  tabContents.forEach((content) =>
    content.classList.remove(operationsContentActive),
  );
  document
    .querySelector(`.operations__content--${clickedButton.dataset.tab}`)
    .classList.add(operationsContentActive);
});

// Fade out

const navLinkHoverAnimation = function ({ target: t }) {
  if (!t.classList.contains('nav__link')) {
    return;
  }
  const linkOver = t;
  const SiblingLinks = linkOver
    .closest('.nav__links')
    .querySelectorAll('.nav__link');
  const logo = linkOver.closest('.nav').querySelector('img');
  const logoText = linkOver.closest('.nav').querySelector('.nav__text');

  SiblingLinks.forEach((el) => {
    if (el !== linkOver) el.style.opacity = this;
  });
  logo.style.opacity = this;
  logoText.style.opacity = this;
};

nav.addEventListener('mouseover', navLinkHoverAnimation.bind(0.4));
nav.addEventListener('mouseout', navLinkHoverAnimation.bind(1));

// Sticky navigation

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const getStickyNav = function (entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const observer = new IntersectionObserver(getStickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
observer.observe(header);

// Appearance of the section

const allSections = document.querySelectorAll('section');
const appearanceSection = function (entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    return;
  }
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(appearanceSection, {
  root: null,
  threshold: 0.2,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// Lazy loading

const lazyImages = document.querySelectorAll('img[data-src]');
const loadImages = function (entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    return;
  }
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const lazyImagesObserver = new IntersectionObserver(loadImages, {
  root: null,
  threshold: 0.5,
  rootMargin: '300px',
});
lazyImages.forEach((image) => lazyImagesObserver.observe(image));

// Slider

let currentSlide = 0;
const minSlide = 0;
const maxSlide = slides.length - 1;

const selectSlide = function (slide = 0) {
  currentSlide = slide;
  moveToSlide();
  activateCurrentDot();
};
const moveToSlide = function () {
  slides.forEach(
    (s, index) =>
      (s.style.transform = `translateX(${(index - currentSlide) * 100}%)`),
  );
};
const activateCurrentDot = function () {
  document.querySelectorAll('.dots__dot').forEach((dot) => {
    dot.classList.remove('dots__dot--active');
  });
  document
    .querySelector(`.dots__dot[data-slide="${currentSlide}"]`)
    .classList.add('dots__dot--active');
};
const nextSlide = function () {
  selectSlide(currentSlide === maxSlide ? minSlide : currentSlide + 1);
};
const prevSlide = function () {
  selectSlide(currentSlide === minSlide ? maxSlide : currentSlide - 1);
};
const createDots = function () {
  slides.forEach(function (_, index) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${index}"></button>`,
    );
  });
};

createDots();
selectSlide();
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
document.addEventListener('keydown', function ({ key: k }) {
  k === 'ArrowRight' && nextSlide();
  k === 'ArrowLeft' && prevSlide();
});
dotContainer.addEventListener('click', function ({ target: t }) {
  t.classList.contains('dots__dot') && selectSlide(Number(t.dataset.slide));
});

//////////////////////////////////////////////////////////
//////////////////////// Examples ////////////////////////
//////////////////////////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// // Find elements (new)

// console.log(document.querySelector('.header'));
// const sections = document.querySelectorAll('.section');
// console.log(sections);

// // Find elements (old)

// console.log(document.getElementById('section--1'));
// const buttons = document.getElementsByTagName('button');
// console.log(buttons);
// console.log(document.getElementsByClassName('btn'));

// // Insert elements

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent =
// //   'Мы используем на этом сайте cookie для улучшения функциональности.';
// message.innerHTML =
//   'Мы используем на этом сайте cookie для улучшения функциональности. <button class="btn btn--close-cookie">Ок!</button>';
// const header = document.querySelector('.header');
// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));
// // header.before(message);
// // header.after(message);

// // Remove elements

// document.querySelector('.btn--close-cookie');
// addEventListener('click', function () {
//   message.remove();
//   // message.parentElement.removeChild(message);
// });

// // Style

// message.style.backgroundColor = '#076785';
// message.style.width = '120%';
// console.log(message.style.width);
// console.log(message.style.color);
// console.log(getComputedStyle(message).color);
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 50 + 'px';
// console.log(message.style.height);

// document.documentElement.style.setProperty('--color-first', 'yellow');

// // Attributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.getAttribute('src'));
// console.log(logo.className);
// console.log(logo.developer);
// console.log(logo.getAttribute('developer'));
// logo.setAttribute('copyright', 'My code');

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data

// console.log(logo.dataset.versionNumber);

// // Classes

// logo.classList.add('a', 'b');
// logo.classList.remove('a', 'b');
// logo.classList.toggle('a');
// logo.classList.contains('c');

// // DO NOT USE

// logo.className = 'a';

// // Scrolling

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function ({target: t}) {
//   const section1Coords = section1.getBoundingClientRect();
//   console.log(section1Coords);
//   console.log(t.getBoundingClientRect());
//   console.log('Текущее прокручивание: x, y', window.scrollX, window.scrollY);
//   console.log(
//     'Ширина и высота viewport',
//     document.documentElement.clientWidth,
//     document.documentElement.clientHeight,
//   );
//   section1.scrollIntoView({ behavior: 'smooth' });

//   // window.scrollTo(
//   //   section1Coords.left + window.scrollX,
//   //   section1Coords.top + window.scrollY
//   // );

//   // window.scrollTo({
//   //   left: section1Coords.left + window.scrollX,
//   //   top: section1Coords.top + window.scrollY,
//   //   behavior: 'smooth',
//   // });
// });

// // Events

// const h1 = document.querySelector('h1');
// const mouseEnter = function (e) {
//   alert('addEventListener: You are now at the h1 element');
// };
// h1.addEventListener('mouseenter', mouseEnter);
// setTimeout(function () {
//   h1.removeEventListener('mouseenter', mouseEnter);
// }, 3000);
// h1.onclick = function (e) {
//   alert('onclick: You click');
// };

// // Event Propagation

// function getRand(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// const getRandomColor = () =>
//   `rgb(${getRand(0, 255)}, ${getRand(0, 255)}, ${getRand(0, 255)})`;
// const backgroundRandom = function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = getRandomColor();
//   // e.stopPropagation();
// };

// document
//   .querySelectorAll('.nav__link')
//   .forEach((element) => element.addEventListener('click', backgroundRandom));
// document
//   .querySelector('.nav__links')
//   .addEventListener('click', backgroundRandom);
// document
//   .querySelector('nav')
//   .addEventListener('click', backgroundRandom /*, true*/);
// document.querySelector('body').addEventListener('click', backgroundRandom);

// // DOM traversing

// const h1 = document.querySelector('h1');

// // Childs

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstElementChild);
// h1.firstElementChild.style.color = 'yellow';
// console.log(h1.lastElementChild);

// // Parents

// console.log(h1.parentNode);
// console.log(h1.parentElement);
// const h2 = document.querySelector('h2');
// h2.closest('.section').style.backgroundColor = 'blue';
// h2.closest('h2').style.backgroundColor = 'green';

// // Siblings

// console.log(h2.previousElementSibling);
// console.log(h2.nextElementSibling);

// console.log(h1.parentElement.children);

// Lifecycle DOM events

// document.addEventListener('DOMContentLoaded', function (e) {
//   console.log('Дерево DOM создано!', e);
// });

// window.addEventListener('load', function (e) {
//   console.log('Страница полностью загружена', e);
// });

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });
