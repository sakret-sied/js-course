import Country from '../classes/country.js';
import ModuleWithCountry from '../classes/module.with.country.js';

export default class Promisify extends ModuleWithCountry {
  execute() {
    const country = new Country();
    country.btn.addEventListener('click', function () {
      country.getUserCountry();
    });
  }
}
