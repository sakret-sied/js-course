// JavaScript falsy values:
// 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// JavaScript truthy values:
console.log(Boolean(32));
console.log(Boolean("hello"));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(3.5));

const age = 0;
if (age) {
    console.log("Person was born.");
} else {
    console.log("The person was not born yet.");
}

let weight = 0;
if (weight) {
    console.log("Weight is defined.");
} else {
    console.log("Weight is not defined.");
}
