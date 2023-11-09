import Module from '/node_modules/js-little-core/module.js';

export default class SomeEvery extends Module {
  execute() {
    const transactions = [
      300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120,
    ];

    // Some
    console.log(transactions.includes(50));
    console.log(transactions.includes(150));

    const hasWithdrawals = transactions.some((trans) => trans < 0);
    console.log(hasWithdrawals);

    const hasWithdrawalsOver5000 = transactions.some((trans) => trans < -5000);
    console.log(hasWithdrawalsOver5000);

    // Every
    const allTransactionsOver0 = transactions.every((trans) => trans > 0);
    console.log(allTransactionsOver0);

    const allTransactionsAbsOver40 = transactions.every(
      (trans) => Math.abs(trans) > 40,
    );
    console.log(allTransactionsAbsOver40);
  }
}
