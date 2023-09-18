'use strict';

const book = function (flightNumber, passengerName) {
  console.log(
    `${passengerName} has booked a ticket on ${this.name} flight ${this.code}${flightNumber}`
  );
  this.bookings.push({
    flight: `${this.code}${flightNumber}`,
    passengerName,
  });
};

const airline1 = {
  name: 'SkyUp',
  code: 'SU',
  bookings: [],
  book,
};
airline1.book(346, 'Jim Green');
airline1.book(635, 'Michael Jordan');
console.log(airline1);

const airline2 = {
  name: 'EuroFlights',
  code: 'EF',
  bookings: [],
};
const flightData = [111, 'Nick Wong'];

// Call
book.call(airline2, 345, 'Linda Wilams');
book.call(airline2, 111, 'Bob Smith');
book.call(airline2, ...flightData);
console.log(airline2);

// Apply (old)
// book.apply(airline2, flightData);
// console.log(airline2);
