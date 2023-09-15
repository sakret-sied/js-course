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

    foodDelivery: function ({
        deliveryTime = '18:00',
        address,
        mainMenuIndex = 0,
        appetizersIndex = 0,
    }) {
        console.log(
            `Your irder on the way to you! ${this.appetizers[appetizersIndex]} and ${this.mainMenu[mainMenuIndex]} will be arrived to ${deliveryTime} at ${address}`
        );
    },

    workingHourse: {
        wed: {
            open: 10,
            close: 23,
        },
        fri: {
            open: 10,
            close: 23,
        },
        sun: {
            open: 12,
            close: 23,
        },
    },
};

japaneseRestaurant.foodDelivery({
    deliveryTime: '12:30',
    address: '18 Merkham Woods Rd',
    mainMenuIndex: 1,
    appetizersIndex: 0,
});
japaneseRestaurant.foodDelivery({ address: 'My home' });

const {
    workingHourse,
    nameRest: restaurantName = 'name',
    categories,
} = japaneseRestaurant;
console.log(workingHourse, restaurantName, categories);

let x = 3;
let y = 5;
const obj = { x: 11, y: 22, z: 33 };
({ x, y } = obj);
console.log(x, y);

const { open, close } = japaneseRestaurant.workingHourse.sun;
console.log(open, close);
