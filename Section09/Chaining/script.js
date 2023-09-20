'use strict';

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

const totalWithdrawalsEuro = transactions
  .filter((trans) => trans < 0)
  .map((trans) => trans * 0.86)
  .reduce((acc, trans) => acc + trans, 0);

console.log(totalWithdrawalsEuro);
