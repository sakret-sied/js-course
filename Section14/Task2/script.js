'use strict';

class ImageLoader {
  static imageContainer = document.querySelector('.images');

  #img;
  #imgFolder = '../src/img/';

  async loadImages(imagePath) {
    try {
      await this.createImageElement('image1.jpg');
      console.log('Первое изображение');
      await this.wait(2);
      this.imageHide();

      await this.createImageElement('image2.jpg');
      console.log('Второе изображение');
      await this.wait(2);
      this.imageHide();
    } catch (e) {
      console.error(e);
    }
  }

  async createImageElement(imagePath) {
    this.#img = document.createElement('img');
    this.#img.src = this.#imgFolder + imagePath;

    this.#img.addEventListener('load', () => {
      ImageLoader.imageContainer.append(this.#img);
      return Promise.resolve(this.#img);
    });

    this.#img.addEventListener('error', () => {
      return Promise.reject(new Error('Изображение не найдено'));
    });
  }

  async wait(seconds) {
    return new Promise(function (resolve) {
      setTimeout(resolve, seconds * 1000);
    });
  }

  imageHide() {
    this.#img.style.display = 'none';
  }
}

new ImageLoader().loadImages();
