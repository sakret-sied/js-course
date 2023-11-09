import Module from '/node_modules/js-little-core/module.js';

export default class ForExample extends Module {
  execute() {
    const petr = [
      'Petr',
      'Petrov',
      1988,
      'developer',
      ['Svetlana', 'Vasya'],
      false,
    ];

    // const types = [];
    // for (let i = 0; i < petr.length; i++) {
    //   console.log(petr[i], typeof petr[i]);
    //   types.push(typeof petr[i]);
    // }
    // console.log(types);

    // const birthYears = [1974, 1994, 2000, 2003];
    // const ages = [];
    // birthYears.forEach((year) => {
    //   ages.push(new Date().getFullYear() - year);
    // });
    // console.log(ages);

    // continue & break

    loopFor: for (let i = 0; i < petr.length; i++) {
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
  }
}
