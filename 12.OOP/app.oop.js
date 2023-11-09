import Encapsulation from './modules/encapsulation.js';
import Inheritance from './modules/inheritance.js';
import OOP from './modules/oop.js';
import Task from './modules/task.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppOOP extends LittleCore {
  constructor() {
    super();
    this.setModules([Encapsulation, Inheritance, OOP, Task]);
  }
}

new AppOOP().init();
