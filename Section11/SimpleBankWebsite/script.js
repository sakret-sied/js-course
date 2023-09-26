'use strict';

///////////////////////////////////////
// Modal window

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll(
  '.btn--show-modal-window',
);

const openModalWindow = function (e) {
  e.preventDefault();
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModalWindow.forEach((button) =>
  button.addEventListener('click', openModalWindow),
);

btnCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindow();
  }
});

// Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Smooth navigation

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (!e.target.classList.contains('nav__link')) {
    return;
  }
  const href = e.target.getAttribute('href');
  document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  console.log(href);
});

////////////////////////////////////////////
///////////////// Examples /////////////////
////////////////////////////////////////////

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

// Classes

// logo.classList.add('a', 'b');
// logo.classList.remove('a', 'b');
// logo.classList.toggle('a');
// logo.classList.contains('c');

// // DO NOT USE

// logo.className = 'a';

// // Scrolling

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const section1Coords = section1.getBoundingClientRect();
//   console.log(section1Coords);
//   console.log(e.target.getBoundingClientRect());
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

// DOM traversing

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
