"use strict";

console.log(firstName);
// console.log(job);
// console.log(birthYear);

var firstName = "YouRa";
let job = "programmer";
const birthYear = 1974;

console.log(decSum(1, 2));
// console.log(expSum(1, 2));
// console.log(arrSum(1, 2));

function decSum(a, b) {
    return a + b;
}
const expSum = function (a, b) {
    return a + b;
};
var arrSum = (a, b) => a + b;

// Example

if (!isUserValid) {
    deleteUser();
}

var isUserValid = true;

function deleteUser() {
    console.log("User is deleted!");
}

var a = 1;
let b = 2;
const c = 3;
