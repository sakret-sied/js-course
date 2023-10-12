export default class Workout {
  static cycling = 'cycling';
  static running = 'running';
  static list = [this.cycling, this.running];

  clickNumber = 0;

  constructor(obj) {
    this.id = obj.id ?? (Date.now() + '').slice(-10);
    this.coords = obj.coords;
    this.date = obj.date ? new Date(obj.date) : new Date();
    this.distance = obj.distance;
    this.duration = obj.duration;
  }

  click() {
    this.clickNumber++;
  }

  _setDescription() {
    this.description =
      this.type === Workout.running ? 'Пробежка ' : 'Велотренировка ';
    this.description += new Intl.DateTimeFormat('ru-Ru').format(this.date);
  }
}
