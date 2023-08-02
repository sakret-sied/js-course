"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const workingHours = {
    [weekdays[2]]: {
        open: 10,
        close: 23,
    },
    [weekdays[4]]: {
        open: 10,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0,
        close: 24,
    },
    [weekdays[6]]: {
        open: 12,
        close: 23,
    },
};

const japaneseRestaurant = {
    name: "Banzai",
    location: "108 Markham Woods Rd, Longwood, USA",
    categories: ["Japanese", "Sushi", "Vegetarian", "Organic"],
    appetizers: ["Seaweed salad", "Tempura shrimp", "Edamame", "Sushi rice"],
    mainMenu: ["Sushi", "Ramen", "Tempura"],

    workingHours,

    orderFood(appetizersIndex, mainMenuIndex) {
        return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
    },
};

console.log(japaneseRestaurant);
