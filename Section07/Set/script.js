'use strict';

const arr = ['Sushi', 'Ramen', 'Sushi', 'Tempura', 'Ramen', 'Sushi'];
console.log(arr.includes('Pizza'));

const orders = new Set(arr);
console.log(orders);
console.log(new Set('Hello!'));
console.log(new Set());
console.log(orders.size);
console.log(orders.has('Sushi'));
console.log(orders.has('Pizza'));
orders.add('Edamame');
orders.add('Edamame');
orders.delete('Tempura');
console.log(orders);
orders.clear();
console.log(orders);

// Remove duplicates
const mealIngridients = [
  'Rice',
  'Pepper',
  'Garlic',
  'Pepper',
  'Garlic',
  'Meat',
  'Meat',
  'Garlic',
];
console.log(new Set(mealIngridients).size);
console.log(new Set('allakhverdov yuriy').size);

const mealIngridientsSet = new Set(mealIngridients);
console.log(mealIngridientsSet);
const mealIngridientsUnique = [...mealIngridientsSet];
console.log(mealIngridientsUnique);
