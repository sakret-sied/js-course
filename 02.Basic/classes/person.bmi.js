export default class PersonBMI {
  constructor(name, lastName, weight, height) {
    this.name = name;
    this.lastName = lastName;
    this.weight = weight;
    this.height = height;
    this.bmi = this.calcBMI();
  }

  calcBMI() {
    return (this.weight / (this.height * 0.01) ** 2).toFixed(1);
  }
}
