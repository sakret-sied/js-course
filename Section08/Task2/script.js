'use strict';

(function () {
  const h2 = document.querySelector('h2');
  h2.style.color = 'orange';
  const body = document.querySelector('body');
  body.addEventListener('click', function () {
    h2.style.color = 'green';
  });
})();
