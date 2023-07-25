// Conversion to string
console.log('************\n\n\nConversion to string');

// String()
let x = String(111);
x = String(2 + 2);
x = String(false);
x = String(new Date());
x = String([1, 2, 3, 'four', 'five']);

// toString()
x = (35).toString();
x = (true).toString();

console.log(x);
console.log(typeof x);
console.log(x.length);


// Conversion to number
console.log('************\n\n\nConversion to number');

// Number()
let y = Number('5.12321321321321312321');
y = Number(false);
y = Number(null);
y = Number('text');
y = Number([1, 2, 3]);

// parseInt()
y = parseInt('123.23');

console.log(y);
console.log(typeof y);
console.log(y.toPrecision(7));


console.log('\n\n\n');

const a = '1';
const b = 2;
const c = a + b;

console.log(c);
console.log(typeof c);
