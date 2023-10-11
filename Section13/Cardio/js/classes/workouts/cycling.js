import { Workout } from './workout.js';
import { Helper } from '../helper.js';

export class Cycling extends Workout {
  type = Workout.cycling;

  constructor(obj) {
    super(obj);
    this.climb = obj.climb;
    this.speed = Helper.calculateSpeed(this.duration, this.distance);
    this._setDescription();
  }
}
