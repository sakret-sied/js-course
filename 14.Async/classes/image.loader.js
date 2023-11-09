export default class ImageLoader {
  container = document.querySelector('#images-container');

  #imgCurrent;
  #imgFolder = './img/';

  async loadImages() {
    try {
      await this.#loadImage('image1.jpg');
      await this.#loadImage('image2.jpg');
    } catch (e) {
      console.error(e);
    }
  }

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

  async #loadImage(imagePath) {
    await this.#createImageElement(imagePath);
    console.log(imagePath);
    await this.#wait(2);
    this.#imageHide();
  }

  async #createImageElement(imagePath) {
    return new Promise((resolve, reject) => {
      this.#imgCurrent = document.createElement('img');
      this.#imgCurrent.src = this.#imgFolder + imagePath;

      this.#imgCurrent.addEventListener('load', () => {
        this.container.append(this.#imgCurrent);
        resolve(this.#imgCurrent);
      });

      this.#imgCurrent.addEventListener('error', () => {
        reject(new Error('Изображение не найдено'));
      });
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
