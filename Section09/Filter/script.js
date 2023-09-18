'use strict';

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

const withdrawals = transactions.filter((trans) => trans < 0);
console.log(withdrawals);

const deposited = transactions.filter((trans) => trans >= 0);
console.log(deposited);
