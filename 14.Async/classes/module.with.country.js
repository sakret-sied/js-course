import Module from '/node_modules/js-little-core/module.js';

export default class ModuleWithCountry extends Module {
  prepare(withButton = true) {
    const main = document.createElement('main');
    main.classList.add('container');

    const countries = document.createElement('div');
    countries.id = 'countries-container';
    countries.classList.add('countries');
    main.insertAdjacentElement('afterbegin', countries);

    if (withButton) {
      const button = document.createElement('div');
      button.id = 'btn-country';
      button.classList.add('btn-country');
      button.innerText = 'Где Я?';
      main.insertAdjacentElement('beforeend', button);
    }

    this.content.insertAdjacentElement('afterbegin', main);
    return this;
  }
}
