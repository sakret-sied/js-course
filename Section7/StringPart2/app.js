"use strict";

const airline = "SkyUp";
const airplane = "Boeing 737";

console.log("airline.toLowerCase() =", airline.toLowerCase());
console.log("airline.toUpperCase() =", airline.toUpperCase());

// Fix passenger name
const passengerName = "liNDa";
const passengerNameLower = passengerName.toLowerCase();
console.log("passengerNameLower =", passengerNameLower);
const passengerNameFixed =
    passengerNameLower[0].toUpperCase() + passengerNameLower.slice(1);
console.log("passengerNameFixed =", passengerNameFixed);

// Email validation
const email = "someemail@gmail.com";
const loginEmail = "  SomeEmail@gmail.com \n";
const emailLower = loginEmail.toLocaleLowerCase();
console.log("loginEmail =", emailLower);
const emailTrim = emailLower.trim();
console.log("emailTrim =", emailTrim);
console.log(email === emailTrim);

// Replacing
const ticketPriceEU = "197,23€";
const ticketPriceUS = ticketPriceEU.replace(",", ".").replace("€", "$");
console.log(ticketPriceUS);
const announcement =
    "All passengers of flight EG234 come to boarding door 18. Boarding door 18!";
console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

// Methods return boolean
console.log("airplane =", airplane);
console.log("airplane.includes('737') =", airplane.includes("737"));
console.log("airplane.startsWith('Bo') =", airplane.startsWith("Bo"));
console.log("airplane.endsWith('777') =", airplane.endsWith("777"));

airplane.startsWith("Boeing") && console.log("You gonna fly on Boeng!");

// Example
const checkLuggage = function (luggage) {
    const luggageLower = luggage.toLowerCase();
    (luggageLower.includes("knife") ||
        luggageLower.includes("gun") ||
        console.log("Welcome to the board")) &&
        console.log("You are not allowed on board");
};

checkLuggage("Food, jeans, socks and Swiss Knife");
checkLuggage("Laptop and food");
checkLuggage("Camera, food, Gun for protection");
