import Country from '../classes/country.js';
import ModuleWithCountry from '../classes/module.with.country.js';

export default class AsyncAwait extends ModuleWithCountry {
  execute() {
    const data = [
      [35.756, 139.256],
      [48.857, 2.358],
      [40.708, -74.051],
    ];
    // data.forEach(([lat, lon]) => new Country().getCountryByGPS(lat, lon));

    const country = new Country();
    country.btn.addEventListener('click', function () {
      country.getUserCountry();
    });
  }
}
