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

    orderFood: function (appetizersIndex, mainMenuIndex) {
        return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
    },
};

// Properties
console.log(japaneseRestaurant.workingHours.thu?.open);
console.log(japaneseRestaurant.workingHours.fri?.open);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of daysOfWeek) {
    const open = japaneseRestaurant.workingHours[day]?.open ?? "never";
    console.log(`On ${day} restaurant opens ar ${open}`);
}

// Methods
console.log(japaneseRestaurant.orderFood?.(1, 2) ?? "Method does not exist");
console.log(japaneseRestaurant.order?.(1, 2) ?? "Method does not exist");

// Arrays
const posts = [
    { name: "JS is cool", username: "Ted" },
    { name: "JS is shit", username: "Dick" },
];
console.log(posts[1]?.name ?? "Post is does not exist");
console.log(posts[3]?.name ?? "Post is does not exist");
