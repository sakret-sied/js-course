import Module from '/node_modules/js-little-core/module.js';

export default class BreakContinue extends Module {
  execute() {
    const petr = [
      'Petr',
      'Petrov',
      1988,
      'developer',
      ['Svetlana', 'Vasya'],
      false,
    ];

    loopFor: for (let i = petr.length - 1; i >= 0; i--) {
      const elemType = typeof petr[i];
      switch (elemType) {
        case 'string':
          continue loopFor;
        case 'object':
          break loopFor;
        default:
          console.log(petr[i], typeof petr[i]);
      }
    }

    for (let exercise = 1; exercise <= 3; exercise++) {
      for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise} Rep ${rep}`);
      }
    }
  }
}
