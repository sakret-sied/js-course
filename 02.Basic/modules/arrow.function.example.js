import Module from '/node_modules/js-little-core/module.js';

export default class ArrowFunctionExample extends Module {
  execute() {
    const myAge = (birthYear) => new Date().getFullYear() - birthYear;
    console.log(myAge(1992));

    const canBuyDrink = (birthYear) => {
      const age = new Date().getFullYear() - birthYear;
      return age >= 18 ? 'You can' : "You can't";
    };
    console.log(canBuyDrink(1992));
  }
}
