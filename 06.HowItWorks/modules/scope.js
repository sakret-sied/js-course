import Module from '/node_modules/js-little-core/module.js';

export default class Scope extends Module {
  execute() {
    const firstName = 'Petr';
    console.log(this.#getAge(1974));
  }

  #getAge(birthYear) {
    const age = new Date().getFullYear() - birthYear;

    function printAge() {
      let info = `You are ${age}, born in ${birthYear}`;
      console.log(info);

      if (age >= 18) {
        var isAdult = true;
        const firstName = 'John';
        const adult = `${firstName} is adult`;
        console.log(adult);

        function sum(a, b) {
          return a + b;
        }
        console.log(sum(1, 2));

        let info = 'New info';
      }
      console.log(x);
      console.log(isAdult);
      console.log(info);

      var x = '333';
    }
    printAge();
    return age;
  }
}
