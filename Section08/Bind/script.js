'use strict';

const airline1 = {
  name: 'SkyUp',
  code: 'SU',
  bookings: [],
  book(flightNumber, passengerName) {
    console.log(
      `${passengerName} has booked a ticket on ${this.name} flight ${this.code}${flightNumber}`
    );
    this.bookings.push({
      flight: `${this.code}${flightNumber}`,
      passengerName,
    });
  },
};
const book = airline1.book;

// Bind

const bookAirline2 = book.bind(airline1);
bookAirline2(45, 'JohnDoe');
bookAirline2(1, 'Marta Jonson');

const bookAirline3Flight21 = book.bind(airline1, 21);
bookAirline3Flight21('Jack Smith');
bookAirline3Flight21('Lana Del Ray');

console.log(airline1);

// Bind with events listener

airline1.airplanes = 200;
airline1.purchaseAirplane = function () {
  this.airplanes++;
  console.log(this.airplanes);
};

document
  .querySelector('#purchase')
  .addEventListener('click', airline1.purchaseAirplane.bind(airline1));

// Partial application

const getPercentage = (total, value) => (value / total) * 100;
console.log(getPercentage(100, 20));

const getOf100 = getPercentage.bind(null, 100);
console.log(getOf100(40));
