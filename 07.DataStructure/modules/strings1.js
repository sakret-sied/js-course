import Module from '/node_modules/js-little-core/module.js';

export default class Strings1 extends Module {
  execute() {
    const airline = 'SkyUp';
    const airplane = 'Boeing 737';

    console.log('airplane[0] =', airplane[0]);
    console.log('airplane[1] =', airplane[1]);
    console.log('airplane[2] =', airplane[2]);
    console.log("'SkyUp'[0] = ", 'SkyUp'[0]);

    console.log('airline.length =', airline.length);
    console.log("'Boeing 737'.length =", 'Boeing 737'.length);

    console.log("airplane.indexOf(' ') =", airplane.indexOf(' '));
    console.log("(airplane.indexOf('7') =", airplane.indexOf('7'));
    console.log("airplane.lastIndexOf(' ') =", airplane.lastIndexOf(' '));
    console.log("(airline.lastIndexOf('7') =", airline.lastIndexOf('7'));

    console.log(
      "airplane.slice(airplane.indexOf('7')) =",
      airplane.slice(airplane.indexOf('7')),
    );
    console.log(
      "airplane.slice(0, airplane.indexOf(' ')) =",
      airplane.slice(0, airplane.indexOf(' ')),
    );
    console.log(
      "airplane.slice(airplane.lastIndexOf(' '') + 1) =",
      airplane.slice(airplane.lastIndexOf(' ') + 1),
    );

    console.log('airline.slice(-2)', airline.slice(-2));
    console.log('airline.slice(2, -2)', airline.slice(2, -2));

    const checkMiddleSeat = (seat) => {
      // B and E are middle seat
      console.log(`${seat} ${'BE'.includes(seat.slice(-1))}`);
    };

    checkMiddleSeat('21A');
    checkMiddleSeat('7B');
    checkMiddleSeat('14E');
  }
}
