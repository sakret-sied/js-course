'use strict';

// Simply Bank App

const account1 = {
  userName: 'Cecil Ireland',
  transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
  interest: 1.5,
  pin: 1111,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
    '2021-03-09T11:42:26.371Z',
    '2021-05-21T07:43:59.331Z',
    '2021-06-22T15:21:20.814Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account2 = {
  userName: 'Amani Salt',
  transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
  interest: 1.3,
  pin: 2222,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
    '2021-03-09T11:42:26.371Z',
    '2021-05-21T07:43:59.331Z',
    '2021-06-22T15:21:20.814Z',
  ],
  currency: 'UAH',
  locale: 'uk-UA',
};

const account3 = {
  userName: 'Corey Martinez',
  transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
  interest: 0.8,
  pin: 3333,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
    '2021-03-09T11:42:26.371Z',
    '2021-05-21T07:43:59.331Z',
    '2021-06-22T15:21:20.814Z',
  ],
  currency: 'RUB',
  locale: 'ru-RU',
};

const account4 = {
  userName: 'Kamile Searle',
  transactions: [530, 1300, 500, 40, 190],
  interest: 1,
  pin: 4444,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
    '2021-03-09T11:42:26.371Z',
    '2021-05-21T07:43:59.331Z',
    '2021-06-22T15:21:20.814Z',
  ],
  currency: 'EUR',
  locale: 'fr-CA',
};

const account5 = {
  userName: 'Oliver Avila',
  transactions: [630, 800, 300, 50, 120],
  interest: 1.1,
  pin: 5555,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
    '2021-03-09T11:42:26.371Z',
    '2021-05-21T07:43:59.331Z',
    '2021-06-22T15:21:20.814Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2, account3, account4, account5];

// Elements

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.total__value--in');
const labelSumOut = document.querySelector('.total__value--out');
const labelSumInterest = document.querySelector('.total__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerTransactions = document.querySelector('.transactions');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnExit = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseNickname = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Functions

const createNicknames = function () {
  accounts.forEach(function (account) {
    account.nickname = account.userName
      .toLowerCase()
      .split(' ')
      .map((word) => word[0])
      .join('');
  });
};

const login = function (e) {
  e.preventDefault();

  const account = accounts.find(
    (account) => account.nickname === inputLoginUsername.value
  );
  if (account?.pin === +inputLoginPin.value) {
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Рады, что вы снова с нами, ${
      account.userName.split(' ')[0]
    }!`;

    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    currentAccount = account;
  } else {
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Данные некорректны!';

    currentAccount = {
      userName: '',
      transactions: [],
      interest: 0,
      pin: 0,
    };
  }

  updateUI();
};

const transfer = function (e) {
  e.preventDefault();

  const transferAmount = +inputTransferAmount.value;
  const recipientNickname = inputTransferTo.value;
  const recipientAcoount = accounts.find(
    (account) => account.nickname === recipientNickname
  );

  inputTransferTo.value = '';
  inputTransferAmount.value = '';

  if (
    transferAmount > 0 &&
    currentAccount.balance >= transferAmount &&
    recipientAcoount &&
    currentAccount.nickname !== recipientAcoount.nickname
  ) {
    currentAccount.transactions.push(-transferAmount);
    recipientAcoount.transactions.push(transferAmount);

    updateUI();
  }
};

const exit = function (e) {
  e.preventDefault();

  if (
    inputCloseNickname.value === currentAccount.nickname &&
    +inputClosePin.value === currentAccount.pin
  ) {
    accounts.splice(
      accounts.findIndex(
        (account) => account.nickname === currentAccount.nickname
      ),
      1
    );
    currentAccount = undefined;

    containerApp.style.opacity = 0;
    inputCloseNickname.value = '';
    inputClosePin.value = '';
    labelWelcome.textContent = 'Войдите в свой аккаунт';
  }
};

const loan = function (e) {
  e.preventDefault();

  const loanAmount = Math.floor(inputLoanAmount.value);
  if (
    loanAmount > 0 &&
    currentAccount.transactions.some(
      (trans) => trans >= (loanAmount * 10) / 100
    )
  ) {
    currentAccount.transactions.push(loanAmount);

    updateUI();
  }

  inputLoanAmount.value = '';
};

const sort = function (e) {
  e.preventDefault();

  transactionsSort = !transactionsSort;
  displayTransactions(currentAccount, transactionsSort);
};

const updateUI = function () {
  displayTransactions(currentAccount);
  displayBalance(currentAccount);
  displayTotal(currentAccount);
};

const displayTransactions = function ({ transactions }, sort = false) {
  containerTransactions.innerHTML = '';

  const transactionsSort = sort
    ? transactions.slice().sort((x, y) => x - y)
    : transactions;

  transactionsSort.forEach(function (trans, index) {
    const transType = trans > 0 ? 'deposit' : 'withdrawal';
    const transactionRow = `
    <div class="transactions__row">
      <div class="transactions__type transactions__type--${transType}">
        ${index + 1} ${transType}
      </div>
      <div class="transactions__value">${trans.toFixed(2)}$</div>
    </div>
    `;
    containerTransactions.insertAdjacentHTML('afterbegin', transactionRow);
  });
};

const displayBalance = function (account) {
  account.balance = account.transactions.reduce((prev, curr) => prev + curr, 0);
  labelBalance.textContent = `${account.balance.toFixed(2)}$`;
};

const displayTotal = function ({ transactions, interest }) {
  const depositesTotal = transactions
    .filter((trans) => trans > 0)
    .reduce((acc, trans) => acc + trans, 0);
  labelSumIn.textContent = `${depositesTotal.toFixed(2)}$`;

  const withdrawalsTotal = transactions
    .filter((trans) => trans < 0)
    .reduce((acc, trans) => acc + trans, 0);
  labelSumOut.textContent = `${withdrawalsTotal.toFixed(2)}$`;

  const interestTotal = transactions
    .filter((trans) => trans > 0)
    .map((depos) => (depos * interest) / 100)
    .filter((interes, _, arr) => {
      return interes >= 5;
    })
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${interestTotal.toFixed(2)}$`;
};

// Execute

let currentAccount,
  transactionsSort = false;
createNicknames();
btnLogin.addEventListener('click', login);
btnTransfer.addEventListener('click', transfer);
btnExit.addEventListener('click', exit);
btnLoan.addEventListener('click', loan);
btnSort.addEventListener('click', sort);

// Example

// const logoImage = document.querySelector('.logo');
// logoImage.addEventListener('click', function () {
//   const transactionsUI = document.querySelectorAll('.transactions__value');
//   const transactionsUiArray = Array.from(
//     transactionsUI,
//     (elem) => +elem.textContent.replace(/[^\d-]/g, '')
//   );
//   console.log(transactionsUiArray);
// });

// const logoImage = document.querySelector('.logo');
// logoImage.addEventListener('click', function () {
//   document.querySelectorAll('.transactions__row').forEach(function (row, i) {
//     if (i % 4 === 0) {
//       row.style.backgroundColor = 'grey';
//     }
//   });
// });
