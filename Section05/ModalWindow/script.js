'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const closeModalWindow = document.querySelector('.close-modal-window');
const showModalWindow = document.querySelectorAll('.show-modal-window');

function show() {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function hide() {
  if (!modalWindow.classList.contains('hidden')) {
    modalWindow.classList.add('hidden');
  }
  if (!overlay.classList.contains('hidden')) {
    overlay.classList.add('hidden');
  }
}

showModalWindow.forEach(function (element) {
  element.addEventListener('click', show);
});

closeModalWindow.addEventListener('click', hide);
overlay.addEventListener('click', hide);
document.addEventListener('keydown', function (event) {
  event.key === 'Escape' && hide();
});
