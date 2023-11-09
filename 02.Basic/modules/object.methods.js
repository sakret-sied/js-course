import Person from '../classes/person.js';
import Module from '/node_modules/js-little-core/module.js';

export default class ObjectMethods extends Module {
  execute() {
    const petr = new Person(
      'Petr',
      'Petrov',
      1988,
      'programming instructor',
      'Svetlana',
      'Vasya',
    );

    petr.log();
  }
}
