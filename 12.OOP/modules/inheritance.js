import Module from '/node_modules/js-little-core/module.js';

export default class Inheritance extends Module {
  execute() {
    // // Function

    // const Person = function (firstName, birthYear) {
    //   this.firstName = firstName;
    //   this.birthYear = birthYear;
    // };

    // Person.prototype.printAge = function () {
    //   console.log(new Date().getFullYear() - this.birthYear);
    // };

    // const Student = function (firstName, birthYear, dept) {
    //   Person.call(this, firstName, birthYear);
    //   this.dept = dept;
    // };
    // Student.prototype.__proto__ = Person.prototype;

    // Student.prototype.introduce = function () {
    //   console.log(
    //     `My name is ${this.firstName} and I study at the "${this.dept}" departament.`,
    //   );
    // };

    // const jack = new Student('Jack', 2010, 'Programming');
    // console.log(jack);
    // jack.introduce();
    // jack.printAge();

    // console.log(jack instanceof Student);
    // console.log(jack instanceof Person);
    // console.log(jack instanceof Object);

    // console.log(Object.getPrototypeOf(jack));
    // console.log(Object.getPrototypeOf(Object.getPrototypeOf(jack)));

    // console.dir(Student.prototype.constructor);

    // // ES 6

    // class Person {
    //   constructor(fullName, birthYear) {
    //     this.fullName = fullName;
    //     this.birthYear = birthYear;
    //   }

    //   get age() {
    //     return new Date().getFullYear() - this.birthYear;
    //   }

    //   set age(value) {
    //     this.birthYear = new Date().getFullYear() - value;
    //   }

    //   get fullName() {
    //     return this._fullName;
    //   }

    //   set fullName(personName) {
    //     if (personName.includes(' ')) {
    //       this._fullName = personName;
    //     } else {
    //       console.log('This is not full name.');
    //     }
    //   }

    //   printAge() {
    //     console.log(this.age);
    //   }

    //   greet() {
    //     console.log(`Hello! My name is ${this.firstName}`);
    //   }

    //   static highFive() {
    //     console.log('High five!');
    //   }
    // }

    // class Student extends Person {
    //   constructor(fullName, birthYear, dept) {
    //     super(fullName, birthYear);
    //     this.dept = dept;
    //   }
    //   greet() {
    //     console.log(
    //       `My name is ${this.fullName} and I study at the "${this.dept}" departament.`,
    //     );
    //   }
    // }

    // const jack = new Student('Jack White', 2010, 'Programming');
    // console.log(jack);
    // jack.greet();

    // Object.create()

    const PersonProto = {
      printAge() {
        console.log(new Date().getFullYear() - this.birthYear);
      },

      initPerson(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
      },
    };

    const StudentProto = Object.create(PersonProto);
    StudentProto.initStudent = function (firstName, birthYear, dept) {
      PersonProto.initPerson.call(this, firstName, birthYear);
      this.dept = dept;
    };

    StudentProto.introduce = function () {
      console.log(
        `My name is ${this.firstName} and I study at the "${this.dept}" departament.`,
      );
    };

    const jack = Object.create(StudentProto);
    jack.initStudent('Jack', 2003, 'Programming');
    jack.introduce();
    jack.printAge();
  }
}
