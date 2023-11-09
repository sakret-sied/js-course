import Car from '../classes/car.js';
import ElectricCar from '../classes/electric.car.js';
import Module from '/node_modules/js-little-core/module.js';

export default class Task extends Module {
  execute() {
    const honda = new Car('Honda', 120);
    honda
      .accelerate()
      .accelerate()
      .break()
      .break()
      .accelerate()
      .break()
      .accelerate()
      .break();

    const bmw = new Car('BMW', 150);
    bmw
      .accelerate()
      .accelerate()
      .accelerate()
      .accelerate()
      .accelerate()
      .accelerate()
      .accelerate()
      .accelerate()
      .accelerate()
      .accelerate();

    console.log('---------------');

    const delorean = new Car('Delorean', 0);
    while (delorean.speedMph < 88) {
      delorean.accelerate();
    }
    console.log('Back To The Future');

    console.log('---------------');

    const tesla = new ElectricCar('Tesla', 100, 33);
    tesla
      .accelerate()
      .accelerate()
      .accelerate()
      .chargeBettery(170)
      .accelerate()
      .accelerate();
  }
}
