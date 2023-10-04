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
    return this.changeSpeed(5);
  }

  break() {
    return this.changeSpeed(-5);
  }

  changeSpeed(by) {
    this.speed += by;
    this.printInfo();
    return this;
  }

  printInfo() {
    console.log(`${this.name} едет со скоростью ${this.speed} км/ч`);
  }
}

class ElectricCar extends Car {
  constructor(name, speed, battery) {
    super(name, speed);
    this.battery = battery;
  }

  chargeBettery(chargeLevel) {
    this.battery =
      chargeLevel > this.battery
        ? chargeLevel >= 100
          ? 100
          : chargeLevel
        : this.battery;
    return this;
  }

  accelerate() {
    if (this.battery <= 0) {
      this.speed = 0;
      return this;
    }
    this.battery -= 1;
    return this.changeSpeed(10);
  }

  printInfo() {
    console.log(
      `${this.name} едет со скоростью ${this.speed} км/ч, с зарядом ${this.battery}%`,
    );
  }
}

const tesla = new ElectricCar('Tesla', 100, 33);

tesla
  .accelerate()
  .accelerate()
  .accelerate()
  .chargeBettery(170)
  .accelerate()
  .accelerate();
