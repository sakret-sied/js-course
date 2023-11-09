import Module from '/node_modules/js-little-core/module.js';

export default class FunctionDefaultArguments extends Module {
  execute() {
    const bookings = [];
    const makeBooking = function (
      flightNumber,
      passengersNum = 1,
      price = 99 * passengersNum,
    ) {
      const booking = {
        flightNumber,
        passengersNum,
        price,
      };
      console.log(booking);
      bookings.push(booking);
    };

    makeBooking('QE123');
    makeBooking('BIBA', 2);
    makeBooking('AYAYA', 3, 33);
    makeBooking('OYOYO', undefined, 44);
  }
}
