'use strict';

// Set timeout

const ingridients = ['Тунец', 'Лосось'];
const sushiTimer = setTimeout(
  (ingrid1, ingrid2) =>
    console.log(`Ваши суши доставлены! Ингридиенты: ${ingrid1}, ${ingrid2}`),
  3000,
  ...ingridients
);
console.log('Ожидание...');

if (ingridients.includes('Майонез')) {
  clearTimeout(sushiTimer);
}

// Set interval

setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);
