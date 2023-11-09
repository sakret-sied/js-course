import Module from '/node_modules/js-little-core/module.js';

export default class FunctionExample extends Module {
  execute() {
    // 1
    const birthYear1 = prompt('Enter birth year');
    console.log(birthYear1);
    const age1 = getAge1(birthYear1);
    console.log(age1);
    function getAge1(birthYear) {
      return new Date().getFullYear() - birthYear;
    }

    // 2
    const getAge2 = function (birthYear) {
      return new Date().getFullYear() - birthYear;
    };
    const birthYear2 = prompt('Enter birth year');
    console.log(birthYear2);
    const age2 = getAge2(birthYear2);
    console.log(age2);
  }
}
