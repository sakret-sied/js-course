'use strict';

class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  get age() {
    return this.calcAge();
  }

  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  }
}

const maryKate = new Person('Mary-Kate Olsen', 1986);
console.log(maryKate);
const ashley = new Person('Ashley Fuller Olsen', 1986);
console.log(ashley);
const elizabeth = new Person('Elizabeth Chase Olsen', 1989);
console.log(elizabeth);
console.log(elizabeth.age);

console.log('---------------');
console.log(elizabeth.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(maryKate));

console.log('---------------');
Person.prototype.personClass = 'Mammal';
console.log(maryKate.hasOwnProperty('birthYear'));
console.log(maryKate.hasOwnProperty('personClass'));

console.log('---------------');
console.dir(maryKate.__proto__?.constructor);
console.dir(maryKate.__proto__.__proto__?.constructor);
console.dir(maryKate.__proto__.__proto__.__proto__?.constructor);

console.log('---------------');
const numbers = [3, 4, 2, 5, 8, 2, 3, 5];
Array.prototype.uniqueElements = function () {
  return [...new Set(this)];
};
console.log(Object.getPrototypeOf(numbers) === Array.prototype);
console.log(numbers.uniqueElements());

console.log('---------------');
const h2 = document.querySelector('h2');
console.dir(h2);
