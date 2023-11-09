import Factory from './factory.js';

export default class AppStorage {
  static workoutsKey = 'workouts';

  static setWorkouts(workouts) {
    localStorage.setItem(AppStorage.workoutsKey, JSON.stringify(workouts));
  }

  static getWorkouts() {
    const storage = JSON.parse(localStorage.getItem(AppStorage.workoutsKey));
    if (!storage) {
      return [];
    }

    const workouts = [];
    storage.forEach((workout) => {
      workouts.push(Factory.getWorkout(workout.type, workout));
    });
    return workouts;
  }

  static removeWorkouts() {
    localStorage.removeItem(AppStorage.workoutsKey);
  }
}
