import AJAX from './modules/ajax.js';
import AsyncAwait from './modules/async.await.js';
import PromiseEventLoop from './modules/promise.event.loop.js';
import PromiseExample from './modules/promise.example.js';
import PromiseFunctions from './modules/promise.functions.js';
import PromiseTask1 from './modules/promise.task1.js';
import PromiseTask2 from './modules/promise.task2.js';
import PromiseTask3 from './modules/promise.task3.js';
import Promisify from './modules/promisify.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppAsync extends LittleCore {
  constructor() {
    super();
    this.setModules([
      AJAX,
      AsyncAwait,
      PromiseEventLoop,
      PromiseExample,
      PromiseFunctions,
      PromiseTask1,
      PromiseTask2,
      PromiseTask3,
      Promisify,
    ]);
  }
}

new AppAsync().init();
