'use strict';

// Lession 1

// console.log('Lession 1');
// let safeBooking = function (text) {
//   let passengerCount = 0;

//   return function (text = 'increase') {
//     switch (text) {
//       case 'increase':
//         passengerCount++;
//         break;
//       case 'reset':
//         passengerCount = 0;
//         break;
//     }
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = safeBooking();
// safeBooking = function () {}; //Experiment

// booker();
// booker();
// booker();
// booker('reset');
// booker();

// console.dir(booker);

// Lession 2

// console.log('Lession 2');
// let f1;

// const f2 = function () {
//   const x = 11;
//   f1 = function () {
//     console.log(x ** 2);
//   };
// };

// const f3 = function () {
//   const y = 12;
//   f1 = function () {
//     console.log(y ** 2);
//   };
// };

// f2();
// f1();
// console.dir(f1);

// f3();
// f1();
// console.dir(f1);

// Example 2

const boardPassengers = function (passengerNumber, secondsBeforeBoarding) {
  const passengersInGroup = passengerNumber / 2;

  setTimeout(function () {
    console.log(`All ${passengerNumber} passengers are now boarding`);
    console.log(`Each group contains ${passengersInGroup} passengers`);
  }, secondsBeforeBoarding * 1000);

  console.log(`The boarding will start in ${secondsBeforeBoarding} seconds`);
};

const passengersInGroup = 1500;
boardPassengers(150, 5);
