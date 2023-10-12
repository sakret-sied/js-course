import Helper from '../helper.js';
import Workout from './workout.js';

export default class Cycling extends Workout {
  type = Workout.cycling;

  constructor(obj) {
    super(obj);
    this.climb = obj.climb;
    this.speed = Helper.calculateSpeed(this.duration, this.distance);
    this._setDescription();
  }
}
