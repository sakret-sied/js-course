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

const delorean = new Car('Delorean', 0);
while (delorean.speedMph < 88) {
  console.log(delorean.accelerate().speedMph);
}
console.log('Back To The Future');
delorean.speedMph = 88;
console.log(delorean.speed);
