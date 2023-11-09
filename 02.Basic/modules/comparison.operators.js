import Module from '/node_modules/js-little-core/module.js';

export default class ComparisonOperators extends Module {
  execute() {
    const x = true;
    const y = 'sadasd';
    let isXMoreY = x == y;
    console.log(isXMoreY);
  }
}
