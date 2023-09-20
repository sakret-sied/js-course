'use strict';

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

console.log(transactions.includes(50));
console.log(transactions.includes(150));

const hasWithdrawals = transactions.some((trans) => trans < 0);
console.log(hasWithdrawals);

const hasWithdrawalsOver5000 = transactions.some((trans) => trans < -5000);
console.log(hasWithdrawalsOver5000);
