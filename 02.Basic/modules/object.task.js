import PersonBMI from '../classes/person.bmi.js';
import Module from '/node_modules/js-little-core/module.js';

export default class ObjectTask extends Module {
  execute() {
    const jack = new PersonBMI('Jack', 'White', 79, 170);
    const mike = new PersonBMI('Mike', 'Black', 79, 170);

    console.log(jack.bmi);
    console.log(mike.bmi);

    if (mike.bmi === jack.bmi) {
      console.log(
        `${mike.name} ${mike.lastName} (${mike.bmi}) is equivalent ${jack.name} ${jack.lastName} (${jack.bmi})`,
      );
    } else {
      const max = mike.bmi > jack.bmi ? mike : jack;
      const min = mike.bmi < jack.bmi ? mike : jack;
      console.log(
        `${max.name} ${max.lastName} (${max.bmi}) is higher than ${min.name} ${min.lastName} (${min.bmi})`,
      );
    }
  }
}
