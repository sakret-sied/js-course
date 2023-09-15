// AND, OR, NOT

// AND
console.log('AND');
console.log(true && true);
console.log(true && false);
console.log(false && false);

// OR
console.log('OR');
console.log(true || true);
console.log(true || false);
console.log(false || false);

// NOT
console.log('NOT');
console.log(!true);
console.log(!false);

// Example
const hasMoney = true;
const isAdult = true;
if (hasMoney && isAdult) {
    console.log('You can buy the drink.');
} else {
    console.log("You can't buy the drink.");
}
