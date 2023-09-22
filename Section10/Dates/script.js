'use strict';

// Date creation

const now = new Date();
console.log(now);

const simeDateString = 'Oct 12 2021 11:35:43';
const someDate = new Date(simeDateString);
console.log(someDate);
console.log(new Date('Dec 31 2021'));

const account1 = {
  userName: 'Cecil Ireland',
  transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
  interest: 1.5,
  pin: 1111,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
    '2021-03-09T11:42:26.371Z',
    '2021-05-21T07:43:59.331Z',
    '2021-06-22T15:21:20.814Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};
console.log(new Date(account1.transactionsDates[0]));
console.log(new Date(2222, 1, 13, 11, 28, 59));
console.log(new Date(2222, 0, 33));

// Unix time started Jan 1 1970
console.log(new Date(0));
console.log(new Date(7 * 24 * 60 * 60 * 1000));

// Work with dates

const futureDate1 = new Date(2222, 1, 13, 11, 28, 59);
console.log(futureDate1);
console.log(futureDate1.getFullYear());
console.log(futureDate1.getMonth());
console.log(futureDate1.getDate());
console.log(futureDate1.getDay());
console.log(futureDate1.getHours());
console.log(futureDate1.getMinutes());
console.log(futureDate1.getSeconds());
console.log(futureDate1.toISOString());
console.log(futureDate1.getTime());
console.log(new Date(7956084539000));
console.log(Date.now());

futureDate1.setFullYear(2223);
console.log(futureDate1);

// New lession
console.log('---------');

const futureDate2 = new Date(2222, 1, 13, 11, 28, 59);
console.log(Number(futureDate2));
console.log(+futureDate2);
console.log(-futureDate2);

const getPassedDays = (startDate, endDate) =>
  Math.abs((endDate - startDate) / (1000 * 60 * 60 * 24));

const days = getPassedDays(new Date(2021, 9, 1), new Date(2021, 9, 12));
console.log(days);
