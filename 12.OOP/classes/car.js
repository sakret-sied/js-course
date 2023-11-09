export default class Car {
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
