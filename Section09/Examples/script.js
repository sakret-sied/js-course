'use strict';

const account1 = {
  userName: 'Cecil Ireland',
  transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
  interest: 1.5,
  pin: 1111,
};

const account2 = {
  userName: 'Amani Salt',
  transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
  interest: 1.3,
  pin: 2222,
};

const account3 = {
  userName: 'Corey Martinez',
  transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
  interest: 0.8,
  pin: 3333,
};

const account4 = {
  userName: 'Kamile Searle',
  transactions: [530, 1300, 500, 40, 190],
  interest: 1,
  pin: 4444,
};

const account5 = {
  userName: 'Oliver Avila',
  transactions: [630, 800, 300, 50, 120],
  interest: 1.1,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

// 1

const bankDepositTotal = accounts
  .flatMap((account) => account.transactions)
  .filter((trans) => trans > 0)
  .reduce((sum, dep) => sum + dep);
console.log(bankDepositTotal);

// 2

const withdrawalsOver300 = accounts
  .flatMap((account) => account.transactions)
  .filter((trans) => trans <= -300).length;
console.log(withdrawalsOver300);

const withdrawalsOver300v2 = accounts
  .flatMap((account) => account.transactions)
  .reduce((count, trans) => (trans <= -300 ? count + 1 : count), 0);
console.log(withdrawalsOver300v2);

// 3

const { depositsTotal, withdrawalsTotal } = accounts
  .flatMap((account) => account.transactions)
  .reduce(
    (acc, trans) => {
      //   trans > 0
      //     ? (acc.depositsTotal += trans)
      //     : (acc.withdrawalsTotal += trans);
      acc[trans > 0 ? 'depositsTotal' : 'withdrawalsTotal'] += trans;

      return acc;
    },
    { depositsTotal: 0, withdrawalsTotal: 0 }
  );
console.log(depositsTotal, withdrawalsTotal);

// 4

const text1 = 'работа с массивами в javascript';
const text2 = 'работа с массивами в javascript простым языком для новичков';
const text3 = 'работа с массивами и строками в javascript';
const text4 = 'для чего нужны массивы в javascript';

const textToTitleCase = function (text) {
  const exeptions = ['с', 'в', 'для', 'и', 'по', 'на', 'о'];

  const titleCase = text
    .toLowerCase()
    .split(' ')
    .map((word, index) =>
      exeptions.includes(word) && index !== 0
        ? word
        : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');

  return titleCase;
};

console.log(textToTitleCase(text1));
console.log(textToTitleCase(text2));
console.log(textToTitleCase(text3));
console.log(textToTitleCase(text4));
