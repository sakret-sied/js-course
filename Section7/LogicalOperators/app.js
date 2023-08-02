"use strict";

// OR (||)
console.log(5 || "Hello!");
console.log("" || "Hello!");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || "" || 0 || "Hey" || 23 || null);

const japaneseRestaurant = {
    orderRamen: function (noodle, ...other) {
        console.log(other);
        let otherStr = "";
        other.forEach((ingr) => (otherStr += `, ${ingr}`));
        console.log(`Your ramen contains: ${noodle}${otherStr}`);
    },
};
const guests = japaneseRestaurant.guestsNumber
    ? japaneseRestaurant.guestsNumber
    : 5;
console.log(guests);

const guests1 = japaneseRestaurant.guestsNumber || 5;
console.log(guests1);

// AND (&&)
console.log(0 && "Hello!");
console.log(1 && "Hello!");
console.log("Hey" && 34 && "" && 0 && 44);

japaneseRestaurant.orderRamen && japaneseRestaurant.orderRamen("Something");
