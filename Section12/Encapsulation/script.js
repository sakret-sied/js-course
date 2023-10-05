'use strict';

class Account {
  locale = navigator.language;

  #pin;
  #transactions = [];

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    this.#pin = pin;

    console.log(`Спасибо, что открыли счёт в нашем банке, ${owner}.`);
  }

  getTransactions() {
    return [...this.#transactions];
  }

  setPinDefault() {
    this.#pin = '0000';
    return this;
  }

  deposit(value) {
    this.#transactions.push(value);
    return this;
  }

  withdraw(value) {
    this.deposit(-value);
    return this;
  }

  requestLoan(value) {
    this.#approveLoan(value) && this.deposit(value);
    return this;
  }

  #approveLoan(value) {
    return Boolean(value);
  }

  static #echo() {
    console.log('Hello World!');
  }
}

const account1 = new Account('Элизабет', 'USD', '1111');

account1.deposit(500).withdraw(100).requestLoan(10000).setPinDefault();

console.log(account1.getTransactions());
console.log(account1);
