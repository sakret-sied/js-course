import Cycling from './workouts/cycling.js';
import Running from './workouts/running.js';
import Workout from './workouts/workout.js';

export default class Factory {
  static getWorkout(type, obj) {
    switch (type) {
      case Workout.cycling:
        return new Cycling(obj);
      case Workout.running:
        return new Running(obj);
    }
  }
}
