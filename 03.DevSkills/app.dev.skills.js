import DevSkills from './modules/dev.skills.js';
import DevTask from './modules/dev.task.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppDevSkills extends LittleCore {
  constructor() {
    super();
    this.setModules([DevSkills, DevTask]);
  }
}

new AppDevSkills().init();
