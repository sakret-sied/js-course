export default class Helper {
  static areNumbers(...numbers) {
    return numbers.every((num) => Number.isFinite(num));
  }

  static areNumbersPositive(...numbers) {
    return numbers.every((num) => num > 0);
  }

  static calculatePace(duration, distance) {
    return duration / distance;
  }

  static calculateSpeed(distance, duration) {
    return (distance / duration) * 60;
  }
}
