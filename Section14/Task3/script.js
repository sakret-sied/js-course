'use strict';

class ImageLoader {
  static container = document.querySelector('#images-container');

  #imgCurrent;
  #imgFolder = '../src/img/';

  async loadAllImages(imagePathsArray) {
    try {
      const images = imagePathsArray.map(
        async (image) => await this.#createImageElement(image),
      );
      console.log(images);

      const imageElements = await Promise.all(images);
      console.log(imageElements);
      imageElements.forEach((img) => img.classList.add('parallel'));
    } catch (e) {
      console.error(e);
    }
  }

  async #createImageElement(imagePath) {
    return new Promise((resolve, reject) => {
      this.#imgCurrent = document.createElement('img');
      this.#imgCurrent.src = this.#imgFolder + imagePath;

      this.#imgCurrent.addEventListener('load', () => {
        ImageLoader.container.append(this.#imgCurrent);
        resolve(this.#imgCurrent);
      });

      this.#imgCurrent.addEventListener('error', () => {
        reject(new Error('Изображение не найдено'));
      });
    });
  }
}

const allImages = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
new ImageLoader().loadAllImages(allImages);
