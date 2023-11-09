import Country from '../classes/country.js';
import ModuleWithCountry from '../classes/module.with.country.js';

export default class PromiseTask1 extends ModuleWithCountry {
  execute() {
    const data = [
      [35.756, 139.256],
      [48.857, 2.358],
      [40.708, -74.051],
    ];

    const country = new Country();
    data.forEach(([lat, lon]) => country.getCountryByGPS(lat, lon));
  }

  prepare() {
    super.prepare(false);
    return this;
  }
}
