import Hoisting from './modules/hoisting.js';
import Scope from './modules/scope.js';
import ThisExample from './modules/this.example.js';
import VariableEnvironment from './modules/variable.environment.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppHowItWorks extends LittleCore {
  constructor() {
    super();
    this.setModules([Hoisting, Scope, ThisExample, VariableEnvironment]);
  }
}

new AppHowItWorks().init();
