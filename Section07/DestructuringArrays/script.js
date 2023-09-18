'use strict';

const japaneseRestaurant = {
  name: 'Banzai',
  location: '108 Markham Woods Rd, Longwood, USA',
  categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
  appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
  mainMenu: ['Sushi', 'Ramen', 'Tempura'],

  orderFood: function (appetizersIndex, mainMenuIndex) {
    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  },
};

const arr = [3, 5, 7];
const x1 = arr[0];
const x2 = arr[1];
const x3 = arr[2];

const [y1, y2, y3] = arr;
console.log(y1, y2, y3);

let [category1, , category3] = japaneseRestaurant.categories;
console.log(category1, category3);

[category3, category1] = [category1, category3];
console.log(category1, category3);

const [appetizer, mainFood] = japaneseRestaurant.orderFood(2, 1);
console.log(appetizer, mainFood);

const nestedArr = [1, 2, [7, 9]];
const [n1, , [n2, n3]] = nestedArr;
console.log(n1, n2, n3);

const unknowArr = [3, 5];
const [u1 = 0, u2 = 0, u3 = 0] = unknowArr;
console.log(u1, u2, u3);
