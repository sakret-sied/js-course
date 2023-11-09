export default class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  set age(value) {
    this.birthYear = new Date().getFullYear() - value;
  }

  get fullName() {
    return this._fullName;
  }

  set fullName(personName) {
    if (personName.includes(' ')) {
      this._fullName = personName;
    } else {
      console.log('This is not full name.');
    }
  }

  printAge() {
    console.log(this.age);
  }

  greet() {
    console.log(`Hello! My name is ${this.firstName}`);
  }

  static highFive() {
    console.log('High five!');
  }
}
