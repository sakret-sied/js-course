'use strict';

const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.main-nav-link');

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
