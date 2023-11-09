import Module from '/node_modules/js-little-core/module.js';

export default class Spread extends Module {
  execute() {
    const japaneseRestaurant = {
      name: 'Banzai',
      location: '108 Markham Woods Rd, Longwood, USA',
      categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
      appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
      mainMenu: ['Sushi', 'Ramen', 'Tempura'],

      orderSushi: function (ing1, ing2, ing3) {
        console.log(`Your ingridients: ${ing1}, ${ing2}, ${ing3}`);
      },
    };

    const arr = [1, 2, 3];

    const newArr = [7, 9, arr[0], arr[1], arr[2]];
    console.log(newArr);

    const spreadArr = [7, 9, ...arr];
    console.log(spreadArr);
    console.log(...spreadArr);

    const newMenu = [...japaneseRestaurant.mainMenu, 'Miso Salmon'];
    console.log(newMenu);

    // Array copying
    const arrayCopy = [...japaneseRestaurant.categories];
    console.log(arrayCopy);

    // Array merge
    const menu = [
      ...japaneseRestaurant.appetizers,
      ...japaneseRestaurant.mainMenu,
    ];
    console.log(menu);

    // String
    const greeting = 'Hey';
    const greetingLetters = [...greeting, '!'];
    console.log(greetingLetters);
    console.log(...greeting);

    // Properties
    // const ingridients = [
    //   prompt(`Ingridient 1 for your sushi?`),
    //   prompt(`Ingridient 2 for your sushi?`),
    //   prompt(`Ingridient 3 for your sushi?`),
    // ];
    // console.log(ingridients);
    // japaneseRestaurant.orderSushi(...ingridients);

    // Objects
    const newJapaneseRestaurant = {
      foundationDate: 2011,
      ...japaneseRestaurant,
      owner: 'Suzuki',
    };
    newJapaneseRestaurant.name = 'Suzuki Sushi';
    console.log(newJapaneseRestaurant);
  }
}
