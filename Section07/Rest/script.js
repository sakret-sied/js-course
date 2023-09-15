'use strict';

const japaneseRestaurant = {
    name: 'Banzai',
    location: '108 Markham Woods Rd, Longwood, USA',
    categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
    appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
    mainMenu: ['Sushi', 'Ramen', 'Tempura'],

    workingHourse: {
        sat: {
            open: 12,
            close: 23,
        },
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

    orderRamen: function (noodle, ...other) {
        console.log(other);
        let otherStr = '';
        other.forEach((ingr) => (otherStr += `, ${ingr}`));
        console.log(`Your ramen contains: ${noodle}${otherStr}`);
    },
};

// Spread
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// Rest
const [a1, a2, ...items] = [1, 2, 3, 4];
console.log(a1, a2, items);

const [seaweed, , edamame, ...other] = [
    ...japaneseRestaurant.appetizers,
    ...japaneseRestaurant.mainMenu,
];
console.log(seaweed, edamame, other);

// Onjects
const { sat, sun, ...weekdays } = japaneseRestaurant.workingHourse;
console.log(sat, sun, weekdays);

const sum = function (...nums) {
    let sum = 0;
    nums.forEach(function (num) {
        sum += num;
    });
    console.log(sum);
};
sum(2, 5);
sum(1, 4, 7, 3);

// Arrays
const numbers = [3, 44, 2];
sum(...numbers);

// Function
japaneseRestaurant.orderRamen('Colored Noodle', 'Meat', 'Chicken', 'Onion');
