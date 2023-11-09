import Car from './car.js';

export default class ElectricCar extends Car {
  #battery;

  constructor(name, speed, battery) {
    super(name, speed);
    this.#battery = battery;
  }

  chargeBettery(chargeLevel) {
    this.#battery =
      chargeLevel > this.#battery
        ? chargeLevel >= 100
          ? 100
          : chargeLevel
        : this.#battery;
    return this;
  }

  accelerate() {
    if (this.#battery <= 0) {
      this.speed = 0;
      return this;
    }
    this.#battery -= 1;
    return this._changeSpeed(10);
  }

  _printInfo() {
    console.log(
      `${this.name} едет со скоростью ${this.speed} км/ч, с зарядом ${
        this.#battery
      }%`,
    );
  }
}
