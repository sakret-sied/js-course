import Module from '/node_modules/js-little-core/module.js';

export default class DataTypes extends Module {
  execute() {
    // Primitive data types
    this.#primitive();

    // Reference data types
    this.#reference();
  }

  #primitive() {
    // String
    const someText = 'some text';
    console.log(typeof someText);

    // Number
    const someNumber = 11;
    console.log(typeof someNumber);

    // Boolean
    const someBoolean = false;
    console.log(typeof someBoolean);

    // Null
    const someNull = null;
    console.log(typeof someNull);

    // Undefined
    let someUndefined;
    console.log(typeof someUndefined);

    // Symbol
    const someSymbol = Symbol();
    console.log(typeof someSymbol);
  }

  #reference() {
    // Array
    const someArray = [1, 2, 3, 4];
    console.log(typeof someArray);

    // Object Literal
    const someObjectLiteral = {
      first: '12',
      second: 'second',
    };
    console.log(typeof someObjectLiteral);

    // Function
    const someFunction = new Function();
    console.log(typeof someFunction);

    // Date
    const someDate = new Date();
    console.log(typeof someDate);
  }
}
