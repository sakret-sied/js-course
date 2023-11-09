import ImageLoader from '../classes/image.loader.js';
import ModuleWithImages from '../classes/module.with.images.js';

export default class PromiseTask3 extends ModuleWithImages {
  execute() {
    const allImages = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    new ImageLoader().loadAllImages(allImages);
  }
}
