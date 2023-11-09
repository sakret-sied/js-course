import Module from '/node_modules/js-little-core/module.js';

export default class FunctionsTask2 extends Module {
  execute() {
    (function (obj) {
      const h2 = document.createElement('h2');
      h2.textContent = 'Button';
      h2.style.color = 'orange';
      obj.content.insertAdjacentElement('afterbegin', h2);

      const body = document.querySelector('body');
      body.addEventListener('click', function () {
        h2.style.color = 'green';
      });
    })(this);
  }
}
