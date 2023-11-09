import DestructuringArrays from './modules/destructuring.arrays.js';
import DestructuringObjects from './modules/destructuring.objects.js';
import ForOfExample from './modules/for.of.example.js';
import LogicalOperators2 from './modules/ligical.operators2.js';
import LoopAndObjects from './modules/loop.and.objects.js';
import MapExample from './modules/map.example.js';
import MapIteration from './modules/map.iteration.js';
import Nullish from './modules/nullish.js';
import ObjectLiteral from './modules/object.literal.js';
import OptionalChaining from './modules/optional.chaining.js';
import Rest from './modules/rest.js';
import SetExample from './modules/set.example.js';
import Spread from './modules/spread.js';
import Strings1 from './modules/strings1.js';
import Strings2 from './modules/strings2.js';
import Strings3 from './modules/strings3.js';
import Task1 from './modules/task1.js';
import Task2 from './modules/task2.js';
import Task3 from './modules/task3.js';
import Task4 from './modules/task4.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppHowItWorks extends LittleCore {
  constructor() {
    super();
    this.setModules([
      DestructuringArrays,
      DestructuringObjects,
      ForOfExample,
      LogicalOperators2,
      LoopAndObjects,
      MapExample,
      MapIteration,
      Nullish,
      ObjectLiteral,
      OptionalChaining,
      Rest,
      SetExample,
      Spread,
      Strings1,
      Strings2,
      Strings3,
      Task1,
      Task2,
      Task3,
      Task4,
    ]);
  }
}

new AppHowItWorks().init();
