import Module from '/node_modules/js-little-core/module.js';

export default class ModuleWithImages extends Module {
  prepare() {
    const main = document.createElement('main');
    main.classList.add('container');

    const images = document.createElement('div');
    images.id = 'images-container';
    images.classList.add('images');
    main.prepend(images);

    this.content.prepend(main);
    return this;
  }
}
