import { Workout } from './workout.js';

export class Running extends Workout {
  type = Workout.running;

  constructor(coords, distance, duration, temp) {
    super(coords, distance, duration);
    this.temp = temp;
    this.pace = this.calculatePace();
    this._setDescription();
  }

  calculatePace() {
    return this.duration / this.distance;
  }
}
