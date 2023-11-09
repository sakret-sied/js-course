import Module from '/node_modules/js-little-core/module.js';

export default class StatementsAndExpressions extends Module {
  execute() {
    // Expressions
    2 + 2;
    37;
    true && false;

    // Statements
    const number = 10;
    if (number > 0) {
      const text = 'The number is positive.';
      console.log(text);
    }
  }
}
