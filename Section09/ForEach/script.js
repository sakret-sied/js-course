'use strict';

// For Array

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// for (const transaction of transactions) {
//   if (transaction > 0) {
//     console.log(`${transaction} was deposited`);
//   } else {
//     console.log(`${Math.abs(transaction)} was withdrew`);
//   }
// }

transactions.forEach(function (transaction, index) {
  if (transaction > 0) {
    console.log(`Transaction № ${index + 1}: ${transaction} was deposited`);
  } else {
    console.log(
      `Transaction № ${index + 1}: ${Math.abs(transaction)} was withdrew`
    );
  }
});

// For Map and Set

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['CNY', 'Chenese yuan'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const uniqueCurrencies = new Set(['USD', 'EUR', 'USD', 'CNY', 'CNY']);
console.log(uniqueCurrencies);
uniqueCurrencies.forEach(function (value, _, set) {
  console.log(`${value}`);
});
