class Person {
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

const jack = new Person('Jack', 'White', 79, 170);
const mike = new Person('Mike', 'Black', 79, 170);

console.log(jack.bmi);
console.log(mike.bmi);

if (mike.bmi === jack.bmi) {
  console.log(
    `${mike.name} ${mike.lastName} (${mike.bmi}) is equivalent ${jack.name} ${jack.lastName} (${jack.bmi})`
  );
} else {
  const max = mike.bmi > jack.bmi ? mike : jack;
  const min = mike.bmi < jack.bmi ? mike : jack;
  console.log(
    `${max.name} ${max.lastName} (${max.bmi}) is higher than ${min.name} ${min.lastName} (${min.bmi})`
  );
}
