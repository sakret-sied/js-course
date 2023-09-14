"use strict";

const safeBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = safeBooking();

booker();
booker();
booker();
