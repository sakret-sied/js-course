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
    this.descrition =
      this.type === this.running
        ? `Пробежка ${new Intl.DateTimeFormat('ru-Ru').format(this.date)}`
        : `Велотренировка ${new Intl.DateTimeFormat('ru-Ru').format(
            this.date,
          )}`;
  }
}
