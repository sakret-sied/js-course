import Module from '/node_modules/js-little-core/module.js';

export default class ObjectExample extends Module {
  execute() {
    const person = {
      name: 'Petr',
      lastName: 'Petrov',
      birthYear: 1988,
      job: 'programming instructor',
      family: { wife: 'Svetlana', child: 'Vasya', me: 'Petr' },
    };
    console.log(person);

    const property = prompt('What do you want');
    console.log(person[property] ?? 'GTFO');

    const familyKeys = Object.keys(person.family);
    const familyValues = Object.values(person.family);
    console.log(
      `${person.name} has ${familyKeys.length} and the first one is ${familyValues[0]}`,
    );
  }
}
