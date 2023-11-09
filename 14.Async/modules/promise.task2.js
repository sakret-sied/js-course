import ImageLoader from '../classes/image.loader.js';
import ModuleWithImages from '../classes/module.with.images.js';

export default class PromiseTask2 extends ModuleWithImages {
  execute() {
    new ImageLoader().loadImages();
  }
}
