import Module from '/node_modules/js-little-core/module.js';

export default class Filter extends Module {
  execute() {
    const transactions = [
      300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120,
    ];

    const withdrawals = transactions.filter((trans) => trans < 0);
    console.log(withdrawals);

    const deposited = transactions.filter((trans) => trans >= 0);
    console.log(deposited);
  }
}
