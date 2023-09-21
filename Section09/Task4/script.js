'use strict';

const cats = [
  { catWeight: 3, foodWeight: 20, owners: ['Наташа'] },
  { catWeight: 6, foodWeight: 90, owners: ['Марина', 'Алиса'] },
  { catWeight: 4, foodWeight: 45, owners: ['Алекс', 'Ирина'] },
  { catWeight: 7, foodWeight: 80, owners: ['Борис'] },
];

const foodRecomended = function ({ catWeight }) {
  return catWeight * 0.75 * 12;
};

const isFoodRecomended = function ({ foodWeight, foodRecomended }) {
  return foodWeight === foodRecomended;
};

const isFoodNormal = function ({ foodWeight, foodRecomended }) {
  return foodWeight > foodRecomended * 0.9 && foodWeight < foodRecomended * 1.1;
};

// 1
console.log('1:');

cats.forEach((cat) => {
  cat.foodRecomended = foodRecomended(cat);
});
console.log(cats);

// 2
console.log('2:');

const alexCat = cats.find(({ owners }) => owners.includes('Алекс'));
console.log(alexCat);
console.log(
  alexCat.foodWeight > alexCat.foodRecomended
    ? 'Кошка Алекса ест слишком много'
    : alexCat.foodWeight < alexCat.foodRecomended
    ? 'Кошка Алекса ест слишком мало'
    : 'Кошка Алекса нормально ест'
);

// 3
console.log('3:');

const catsEatTooMuchOwners = cats
  .filter((cat) => cat.foodWeight > foodRecomended(cat))
  .flatMap((cat) => cat.owners);
console.log(catsEatTooMuchOwners);

const catsEatTooLittleOwners = cats
  .filter((cat) => cat.foodWeight < foodRecomended(cat))
  .flatMap((cat) => cat.owners);
console.log(catsEatTooLittleOwners);

// 4
console.log('4:');

console.log(
  catsEatTooMuchOwners
    .join(', ')
    .concat(' - хозяева кошек, которые едят слишком много!')
);

console.log(
  catsEatTooLittleOwners
    .join(', ')
    .concat(' - хозяева кошек, которые едят слишком мало!')
);

// 5
console.log('5:');

console.log(cats.some(isFoodRecomended));

// 6
console.log('6:');

console.log(cats.some(isFoodNormal));

// 7
console.log('7:');

console.log(cats.filter(isFoodNormal));

// 8
console.log('8:');

console.log(cats.slice().sort((x, y) => x.foodRecomended - y.foodRecomended));
