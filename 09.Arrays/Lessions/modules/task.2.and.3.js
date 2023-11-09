import Module from '/node_modules/js-little-core/module.js';

export default class Task2And3 extends Module {
  execute() {
    const cats1 = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
    const cats2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];

    const getAverageHumanAge = (catAges) => {
      return catAges
        .map((cat) => (cat <= 2 ? cat * 10 : cat * 7))
        .filter((cat) => cat >= 18)
        .reduce((avg, cat, _, { length }) => avg + cat / length, 0);
    };
    console.log(getAverageHumanAge(cats1));
    console.log(getAverageHumanAge(cats2));
  }
}
