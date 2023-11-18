import Module from '/node_modules/js-little-core/module.js';

export default class ModuleWithCountry extends Module {
  prepare(withButton = true) {
    const main = document.createElement('main');
    main.classList.add('container');

    const countries = document.createElement('div');
    countries.id = 'countries-container';
    countries.classList.add('countries');
    main.prepend(countries);

    if (withButton) {
      const button = document.createElement('div');
      button.id = 'btn-country';
      button.classList.add('btn-country');
      button.textContent = 'Где Я?';
      main.append(button);
    }

    this.content.prepend(main);
    return this;
  }
}
