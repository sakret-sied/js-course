export class Workout {
  static cycling = 'cycling';
  static running = 'running';
  static list = [this.cycling, this.running];

  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription() {
    this.description =
      this.type === Workout.running ? 'Пробежка ' : 'Велотренировка ';
    this.description += new Intl.DateTimeFormat('ru-Ru').format(this.date);
  }
}
