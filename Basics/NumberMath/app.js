const x = 50;
const y = 10;
let z;

// Simple math
z = x + y;
z = x - y;
z = x * y;
z = x / y;
z = x % y;

// Math object
z = Math.PI;
z = Math.round(3.5);
z = Math.ceil(3.1);
z = Math.floor(3.7);
z = Math.sqrt(9);
z = Math.abs(-7);
z = Math.pow(2, 2);
const arr = [3, 45, 32, 23, 11, -57];
z = Math.min(...arr);
z = Math.max(...arr);
z = Math.round(Math.random() * 100);

console.log(z);
