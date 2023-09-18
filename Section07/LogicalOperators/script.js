'use strict';

// AND (&&)
console.log(0 && 'Hello!');
console.log(1 && 'Hello!');
console.log('hey' && 34 && 0 && 44 && null);

if (japaneseRestaurant.orderRamen) {
  japaneseRestaurant.orderRamen('Something');
}

japaneseRestaurant.orderRamen && japaneseRestaurant.orderRamen('Something');

// OR (||)
console.log(5 || 'Hello!');
console.log('' || 'Hello!');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || '' || 0 || 'Hey!' || 23 || null);

japaneseRestaurant.guestsNumber = 0;

const guests = japaneseRestaurant.guestsNumber
  ? japaneseRestaurant.guestsNumber
  : 5;
console.log(guests);

const guests1 = japaneseRestaurant.guestsNumber || 5;
console.log(guests1);
