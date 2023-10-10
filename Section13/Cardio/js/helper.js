import { Workout } from './workout/workout.js';
import { Cycling } from './workout/cycling.js';
import { Running } from './workout/running.js';

export class Helper {
  static areNumbers(...numbers) {
    return numbers.every((num) => Number.isFinite(num));
  }

  static areNumbersPositive(...numbers) {
    return numbers.every((num) => num > 0);
  }

  static getWorkout(type, data) {
    switch (type) {
      case Workout.cycling:
        return new Cycling(...data);
      case Workout.running:
        return new Running(...data);
    }
  }
}
