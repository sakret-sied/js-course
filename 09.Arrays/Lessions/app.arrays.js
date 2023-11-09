import ArrayFrom from './modules/array.from.js';
import Arrays from './modules/arrays.js';
import Chaining from './modules/chaining.js';
import Examples from './modules/examples.js';
import Filter from './modules/filter.js';
import Find from './modules/find.js';
import Flat from './modules/flat.js';
import ForEach from './modules/for.each.js';
import MapExample from './modules/map.example.js';
import Reduce from './modules/reduce.js';
import SomeEvery from './modules/some.every.js';
import Sort from './modules/sort.js';
import Task1 from './modules/task.1.js';
import Task2And3 from './modules/task.2.and.3.js';
import Task4 from './modules/task.4.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppArrays extends LittleCore {
  constructor() {
    super();
    this.setModules([
      ArrayFrom,
      Arrays,
      Chaining,
      Examples,
      Filter,
      Find,
      Flat,
      ForEach,
      MapExample,
      Reduce,
      SomeEvery,
      Sort,
      Task1,
      Task2And3,
      Task4,
    ]);
  }
}

new AppArrays().init();
