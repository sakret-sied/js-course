import Module from '/node_modules/js-little-core/module.js';

export default class WhileExample extends Module {
  execute() {
    let exercise = 1;
    while (exercise <= 3) {
      let rep = 1;
      while (rep <= 5) {
        console.log(`Exercise ${exercise} Rep ${rep}`);
        rep++;
      }
      exercise++;
    }
  }
}
