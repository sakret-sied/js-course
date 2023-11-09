import Module from '/node_modules/js-little-core/module.js';

export default class MapExample extends Module {
  execute() {
    const transactions = [
      300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120,
    ];
    console.log(transactions);

    const usdToEuro = 0.86;

    const transactionsEuro = transactions.map((value) => value * usdToEuro);
    console.log(transactionsEuro);

    const transactionsEuroForOf = [];
    for (const trans of transactions) {
      transactionsEuroForOf.push(trans * usdToEuro);
    }
    console.log(transactionsEuroForOf);

    const transactionsDescriptions = transactions.map(
      (value, index) =>
        `Transaction № ${index + 1}: ${Math.abs(value)} was ${
          value > 0 ? 'deposited' : 'withdrew'
        }`,
    );
    console.log(transactionsDescriptions);
  }
}
