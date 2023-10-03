'use strict';

// Split

console.log('My+name+is+DaNya'.split('+'));
console.log('DaNya Allakhverdov'.split(' '));
const [firstName, lastName] = 'DaNya Allakhverdov'.split(' ');
console.log(firstName, lastName);

// Join

const text = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(text);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesCapitalize = [];
  for (const part of names) {
    namesCapitalize.push(part.replace(part[0], part[0].toUpperCase()));
  }
  console.log(namesCapitalize.join(' '));
};

capitalizeName('danya allakhverdov');
capitalizeName('jack white tiger jr.');

// Padding

const message = 'Hi there!';
console.log(message.padStart(27, '-').padEnd(37, '-'));

// Mask card

const maskCreditCart = function (cardNumber) {
  const stringNumber = cardNumber + '';
  const last4 = stringNumber.slice(-4);
  console.log(last4.padStart(stringNumber.length, '*'));
};

maskCreditCart(2131232132142132);
maskCreditCart('21321321312312312312312312321');

// Repeat

const greeting = 'Hi!';
console.log(greeting.repeat(50));
const howMuchYouLoveSomebody = function (loveNumber) {
  console.log(`I love you ${'♡'.repeat(loveNumber)}`);
};
howMuchYouLoveSomebody(100);
