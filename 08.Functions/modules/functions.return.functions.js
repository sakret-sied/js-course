import Module from '/node_modules/js-little-core/module.js';

export default class FunctionsReturnFunctions extends Module {
  execute() {
    const greet = (text) => (name) => console.log(`${text} ${name}`);
    const hi = greet('Hi');
    hi('Jack');
    hi('Diana');
    hi('Mick');

    greet('Hey')('Lilu');
  }
}
