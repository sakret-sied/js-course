'use strict';

let letters1 = ['a', 'b', 'c', 'd', 'e', 'f'];
let letters2 = ['g', 'h', 'i'];

// slice()

// console.log(letters1.slice(1));
// console.log(letters1.slice(1, 4));
// console.log(letters1.slice(-1));
// console.log(letters1.slice(-3));
// console.log(letters1.slice(-1, -3));
// console.log(letters1.slice(3, -1));
// console.log(letters1.slice());
// console.log([...letters1]);

// splice()

// console.log(letters1.splice(1));
// console.log(letters1.splice(-1));
// console.log(letters1.splice(1, 3));

// reverse()

// console.log(letters1.reverse());

// concat()

const letters = letters1.concat(letters2);
console.log(letters);
console.log(letters1.concat(letters2));
console.log([...letters1, letters2]);

// join

console.log(letters.join(', '));
