'use strict';

class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  get speedMph() {
    return Math.round(this.speed / 1.6);
  }

  set speedMph(speed) {
    this.speed = Math.round(speed * 1.6);
  }

  accelerate() {
    return this._changeSpeed(5);
  }

  break() {
    return this._changeSpeed(-5);
  }

  _changeSpeed(by) {
    this.speed += by;
    this._printInfo();
    return this;
  }

  _printInfo() {
    console.log(`${this.name} едет со скоростью ${this.speed} км/ч`);
  }
}

class ElectricCar extends Car {
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
