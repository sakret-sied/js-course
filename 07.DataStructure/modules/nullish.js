import Module from '/node_modules/js-little-core/module.js';

export default class Nullish extends Module {
  execute() {
    // Nullish values: null and undefined
    const japaneseRestaurant = {};
    const guests1 = japaneseRestaurant.guestsNumber ?? 5;
    console.log(guests1);
  }
}
