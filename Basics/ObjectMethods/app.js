class Person {
    constructor(name, lastName, birthYear, job, wife, child) {
        this.name = name;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.job = job;
        this.family = { ["wife"]: wife, ["child"]: child };
        this.age = this.calcAge();
    }
    calcAge() {
        return new Date().getFullYear() - this.birthYear;
    }
    log() {
        console.log(
            `${this.name} is a ${this.calcAge()}-year old ${
                this.job
            } and he has ${this.hasDriverLicense ? "a" : "no"} driver license`
        );
    }
}

const youra = new Person(
    "YouRa",
    "Allakhverdov",
    1974,
    "programming instructor",
    "Irina",
    "Michael"
);
youra.log();
