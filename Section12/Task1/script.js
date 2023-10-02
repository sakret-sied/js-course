'use strict';

class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  accelerate() {
    return this.changeSpeed(5);
  }

  break() {
    return this.changeSpeed(-5);
  }

  changeSpeed(by) {
    this.speed += by;
    console.log(this);
    return this;
  }
}

const honda = new Car('Honda', 120);
const bmw = new Car('BMW', 150);

honda
  .accelerate()
  .accelerate()
  .break()
  .break()
  .accelerate()
  .break()
  .accelerate()
  .break();
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
