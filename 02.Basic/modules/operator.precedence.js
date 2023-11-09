import Module from '/node_modules/js-little-core/module.js';

export default class OperatorPrecedence extends Module {
  execute() {
    const x = (2 + 10) / 2;
    console.log(x);

    const y = 10 - x > 10;
    console.log(y);

    let a, b;
    console.log(a, b);
    a = 10 + 5 - 3 * 4;
    console.log(a);
  }
}
