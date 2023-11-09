import Module from '/node_modules/js-little-core/module.js';

export default class Sort extends Module {
  execute() {
    // Strings
    const names = ['John', 'Sara', 'Evan', 'Steve', 'Cecil'];
    names.sort();
    console.log(names);

    // Numbers
    const transactions = [
      300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120,
    ];
    // asc
    transactions.sort((x, y) => x - y);
    console.log(transactions);
    // desc
    transactions.sort((x, y) => y - x);
    console.log(transactions);
  }
}
