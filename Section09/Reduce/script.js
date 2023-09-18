'use strict';

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

const balance = transactions.reduce((prev, curr) => prev + curr);
console.log(balance);

const min = transactions.reduce((prev, curr) => (curr < prev ? curr : prev));
console.log(min);
