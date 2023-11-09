import Dates from './modules/dates';
import Internationalization from './modules/internationalization';
import Numbers from './modules/numbers';
import Timers from './modules/timers';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppNumbersDatesTimers extends LittleCore {
  constructor() {
    super();
    this.setModules([Dates, Internationalization, Numbers, Timers]);
  }
}

new AppNumbersDatesTimers().init();
