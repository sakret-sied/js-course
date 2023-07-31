"use strict";

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
const user187 = {
    birthYear: 1974,
    getAge: function () {
        console.log(new Date().getFullYear() - this.birthYear);
        console.log(this);
    },
};
user187.getAge();

// Another object
const user188 = {
    birthYear: 2002,
};
user188.getAge = user187.getAge;
user188.getAge();
