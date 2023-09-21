'use strict';

console.log([1, 2, 3]);
console.log(new Array(1, 2, 3));

// Array.fill()

const arr1 = new Array(3);
console.log(arr1);
console.log(arr1.map(() => 7));

arr1.fill(7, 1, 2);
console.log(arr1);

const arr2 = [1, 1, 1, 1, 1];
arr2.fill(3, 2, 4);
console.log(arr2);

// Array.from()

const arr3 = Array.from({ length: 5 }, () => 1);
console.log(arr3);

const arr4 = Array.from({ length: 5 }, (_, index) => index + 1);
console.log(arr4);
