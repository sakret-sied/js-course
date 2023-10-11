import { Workout } from './workout.js';

export class Cycling extends Workout {
  type = Workout.cycling;

  constructor(coords, distance, duration, climb) {
    super(coords, distance, duration);
    this.climb = climb;
    this.speed = this.calculateSpeed();
    this._setDescription();
  }

  calculateSpeed() {
    return this.distance / this.duration / 60;
  }
}
