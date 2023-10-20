'use strict';

class ImageLoader {
  static container = document.querySelector('#images-container');

  #imgCurrent;
  #imgFolder = '../src/img/';

  async loadImages() {
    try {
      await this.#loadImage('image1.jpg');
      await this.#loadImage('image2.jpg');
    } catch (e) {
      console.error(e);
    }
  }

  async #loadImage(imagePath) {
    await this.#createImageElement(imagePath);
    console.log(imagePath);
    await this.#wait(2);
    this.#imageHide();
  }

  async #createImageElement(imagePath) {
    this.#imgCurrent = document.createElement('img');
    this.#imgCurrent.src = this.#imgFolder + imagePath;

    this.#imgCurrent.addEventListener('load', () => {
      ImageLoader.container.append(this.#imgCurrent);
      return Promise.resolve(this.#imgCurrent);
    });

    this.#imgCurrent.addEventListener('error', () => {
      return Promise.reject(new Error('Изображение не найдено'));
    });
  }

  async #wait(seconds) {
    return new Promise(function (resolve) {
      setTimeout(resolve, seconds * 1000);
    });
  }

  #imageHide() {
    this.#imgCurrent.style.display = 'none';
  }
}

new ImageLoader().loadImages();
