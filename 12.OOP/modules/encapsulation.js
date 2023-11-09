import Account from '../classes/account.js';
import Module from '/node_modules/js-little-core/module.js';

export default class Encapsulation extends Module {
  execute() {
    const account1 = new Account('Элизабет', 'USD', '1111');

    account1.deposit(500).withdraw(100).requestLoan(10000).setPinDefault();

    console.log(account1.getTransactions());
    console.log(account1);
  }
}
