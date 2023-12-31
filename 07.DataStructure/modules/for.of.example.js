import Module from '/node_modules/js-little-core/module.js';

export default class ForOfExample extends Module {
  execute() {
    const japaneseRestaurant = {
      name: 'Banzai',
      location: '108 Markham Woods Rd, Longwood, USA',
      categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
      appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
      mainMenu: ['Sushi', 'Ramen', 'Tempura'],
    };

    const menu = [
      ...japaneseRestaurant.appetizers,
      ...japaneseRestaurant.mainMenu,
    ];
    for (const [index, food] of menu.entries()) {
      console.log(`${index + 1}. ${food}`);
    }
  }
}
