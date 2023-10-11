import { Workout } from './workouts/workout.js';
import { Cycling } from './workouts/cycling.js';
import { Running } from './workouts/running.js';

export class Factory {
  static getWorkout(type, data) {
    switch (type) {
      case Workout.cycling:
        return new Cycling(data);
      case Workout.running:
        return new Running(data);
    }
  }
}
