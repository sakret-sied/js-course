'use strict';

// Global
console.log(this);

// Function expression
const getAgeExpression = function (birthYear) {
  console.log(new Date().getFullYear() - birthYear);
  console.log(this);
};
getAgeExpression(2001);

// Function arrow
const getAgeArrow = (birthYear) => {
  console.log(new Date().getFullYear() - birthYear);
  console.log(this);
};
getAgeArrow(2001);

// Object
var firstName = 'Jack';

const user187 = {
  firstName: 'DaNya',
  birthYear: 1974,
  getAge: function () {
    console.log(new Date().getFullYear() - this.birthYear);
    console.log(this);

    const self = this;
    const isAdult = function () {
      console.log(`Self`);
      console.log(new Date().getFullYear() - self.birthYear >= 18);
    };
    isAdult();

    const isAdultArr = () => {
      console.log('Arrow');
      console.log(new Date().getFullYear() - this.birthYear >= 18);
    };
    isAdultArr();
  },
  sayGreeting: () => {
    console.log(`Hello, I'm ${this.firstName}`);
  },
};
user187.getAge();
user187.sayGreeting();
console.log(this.firstName);

// Another object
const user188 = {
  birthYear: 2002,
};
user188.getAge = user187.getAge;
user188.getAge();
