import Module from '/node_modules/js-little-core/module.js';

export default class OperatorContraction extends Module {
  execute() {
    let x = 5;
    let y = 3;

    y = x++;

    console.log(x);
    console.log(y);
  }
}
