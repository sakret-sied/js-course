'use strict';

const a = 325458478.21;

const options = {
  style: 'currency',
  currency: 'USD',
};

console.log('US', new Intl.NumberFormat('en-US', options).format(a));
console.log('Ukraine', new Intl.NumberFormat('uk-UA', options).format(a));
console.log('Russia', new Intl.NumberFormat('ru-RU', options).format(a));
console.log('Germany', new Intl.NumberFormat('de-DE', options).format(a));
console.log('Syria', new Intl.NumberFormat('ar-SY', options).format(a));
