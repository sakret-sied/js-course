export class Helper {
  static areNumbers(...numbers) {
    return numbers.every((num) => Number.isFinite(num));
  }

  static areNumbersPositive(...numbers) {
    return numbers.every((num) => num > 0);
  }
}
