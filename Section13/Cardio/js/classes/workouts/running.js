import { Workout } from './workout.js';
import { Helper } from '../helper.js';

export class Running extends Workout {
  type = Workout.running;

  constructor(obj) {
    super(obj);
    this.temp = obj.temp;
    this.pace = Helper.calculatePace(this.duration, this.distance);
    this._setDescription();
  }
}
