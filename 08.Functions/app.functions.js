import BindExample from './modules/bind.example.js';
import CallAndApply from './modules/call.and.apply.js';
import CallbackFunctions from './modules/callback.functions.js';
import Closures from './modules/closures.js';
import FunctionArguments from './modules/function.arguments.js';
import FunctionDefaultArguments from './modules/function.default.arguments.js';
import FunctionsReturnFunctions from './modules/functions.return.functions.js';
import FunctionsTask1 from './modules/functions.task1.js';
import FunctionsTask2 from './modules/functions.task2.js';
import IIFE from './modules/iife.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppFunctions extends LittleCore {
  constructor() {
    super();
    this.setModules([
      BindExample,
      CallAndApply,
      CallbackFunctions,
      Closures,
      FunctionArguments,
      FunctionDefaultArguments,
      FunctionsReturnFunctions,
      FunctionsTask1,
      FunctionsTask2,
      IIFE,
    ]);
  }
}

new AppFunctions().init();
