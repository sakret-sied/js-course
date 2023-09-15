'use strict';

let a = 1;
let b = a;
a = 2;
console.log(a);
console.log(b);

const x = {
    foo: 'bar',
    a: 1,
};
const y = x;
y.a = 2;
console.log(x);
console.log(y);

let lastName = 'Brown';
let oldLastName = lastName;
lastName = 'White';
console.log(lastName, oldLastName);

const jane = {
    firstName: 'Jane',
    lastName: 'Brown',
    age: 21,
    familyMembers: ['Jack', 'Bob', 'Greta'],
};
const marriedJane = Object.assign({}, jane);
marriedJane.lastName = 'White';
marriedJane.familyMembers.push('Bill', 'Marta');
console.log('jane:', jane);
console.log('Married Jane:', marriedJane);
