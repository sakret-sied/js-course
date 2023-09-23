'use strict';

// Simply Bank App

const accountEmpty = {
  userName: '',
  interest: 0,
  pin: 0,
  transactions: [],
  currency: '',
  locale: '',
};

const account1 = {
  userName: 'Cecil Ireland',
  interest: 1.5,
  pin: 1111,
  transactions: [
    { datetime: '2020-10-02T14:43:31.074Z', currency: 'USD', value: 500 },
    { datetime: '2020-10-29T11:24:19.761Z', currency: 'USD', value: 250 },
    { datetime: '2020-11-15T10:45:23.907Z', currency: 'USD', value: -300 },
    { datetime: '2021-01-22T12:17:46.255Z', currency: 'USD', value: 5000 },
    { datetime: '2021-02-12T15:14:06.486Z', currency: 'USD', value: -850 },
    { datetime: '2021-03-09T11:42:26.371Z', currency: 'USD', value: -110 },
    { datetime: '2023-09-21T15:21:20.814Z', currency: 'USD', value: -170 },
    { datetime: '2023-09-22T15:21:20.814Z', currency: 'USD', value: 1100 },
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account2 = {
  userName: 'Amani Salt',
  interest: 1.3,
  pin: 2222,
  transactions: [
    { datetime: '2020-10-02T14:43:31.074Z', currency: 'UAH', value: 2000 },
    { datetime: '2020-10-29T11:24:19.761Z', currency: 'UAH', value: 6400 },
    { datetime: '2020-11-15T10:45:23.907Z', currency: 'UAH', value: -1350 },
    { datetime: '2021-01-22T12:17:46.255Z', currency: 'UAH', value: -70 },
    { datetime: '2021-02-12T15:14:06.486Z', currency: 'UAH', value: -210 },
    { datetime: '2021-03-09T11:42:26.371Z', currency: 'UAH', value: -2000 },
    { datetime: '2023-09-21T15:21:20.814Z', currency: 'UAH', value: 5500 },
    { datetime: '2023-09-22T15:21:20.814Z', currency: 'UAH', value: -30 },
  ],
  currency: 'UAH',
  locale: 'uk-UA',
};

const account3 = {
  userName: 'Corey Martinez',
  interest: 0.8,
  pin: 3333,
  transactions: [
    { datetime: '2020-10-02T14:43:31.074Z', currency: 'RUB', value: 900 },
    { datetime: '2020-10-29T11:24:19.761Z', currency: 'RUB', value: -200 },
    { datetime: '2020-11-15T10:45:23.907Z', currency: 'RUB', value: 280 },
    { datetime: '2021-01-22T12:17:46.255Z', currency: 'RUB', value: 300 },
    { datetime: '2021-02-12T15:14:06.486Z', currency: 'RUB', value: -200 },
    { datetime: '2021-03-09T11:42:26.371Z', currency: 'RUB', value: 150 },
    { datetime: '2023-09-21T15:21:20.814Z', currency: 'RUB', value: 1400 },
    { datetime: '2023-09-22T15:21:20.814Z', currency: 'RUB', value: -400 },
  ],
  currency: 'RUB',
  locale: 'ru-RU',
};

const account4 = {
  userName: 'Kamile Searle',
  interest: 1,
  pin: 4444,
  transactions: [
    { datetime: '2020-10-02T14:43:31.074Z', currency: 'EUR', value: 530 },
    { datetime: '2020-10-29T11:24:19.761Z', currency: 'EUR', value: 1300 },
    { datetime: '2020-11-15T10:45:23.907Z', currency: 'EUR', value: 500 },
    { datetime: '2021-01-22T12:17:46.255Z', currency: 'EUR', value: 40 },
    { datetime: '2021-02-12T15:14:06.486Z', currency: 'EUR', value: 190 },
  ],
  currency: 'EUR',
  locale: 'fr-CA',
};

const account5 = {
  userName: 'Oliver Avila',
  transactions: [630, 800, 300, 50, 120],
  interest: 1.1,
  pin: 5555,
  transactions: [
    { datetime: '2020-10-02T14:43:31.074Z', currency: 'USD', value: 630 },
    { datetime: '2020-10-29T11:24:19.761Z', currency: 'USD', value: 800 },
    { datetime: '2020-11-15T10:45:23.907Z', currency: 'USD', value: 300 },
    { datetime: '2021-01-22T12:17:46.255Z', currency: 'USD', value: 50 },
    { datetime: '2021-02-12T15:14:06.486Z', currency: 'USD', value: 120 },
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

const getDate = function (date, locale = navigator.language, isText = false) {
  const daysPassed = getPassedDays(new Date(), date);
  if (!isText || daysPassed > 7) {
    return new Intl.DateTimeFormat(locale).format(date);
  }
  switch (daysPassed) {
    case 0:
      return 'Сегодня';
    case 1:
      return 'Вчера';
    case 2:
    case 3:
    case 4:
      return `${daysPassed} дня`;
  }
};

const getCurrency = (value, currency, locale) => {
  if (!value && !currency && !locale) {
    return '';
  }

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const getPassedDays = (startDate, endDate) =>
  Math.round(Math.abs((endDate - startDate) / (1000 * 60 * 60 * 24)));

const createNicknames = function () {
  accounts.forEach(function (account) {
    account.nickname = account.userName
      .toLowerCase()
      .split(' ')
      .map((word) => word[0])
      .join('');
  });
};

const startLogoutTimer = function () {
  const logOutTimerCallback = () => {
    const minutes = String(Math.trunc(time / 60)).padStart(2, '0');
    const seconds = String(Math.trunc(time % 60)).padStart(2, '0');
    labelTimer.textContent = `${minutes}:${seconds}`;

    if (time-- === 0) {
      clearInterval(logOutTimer);
      currentAccount = { ...accountEmpty };

      updateUI();
    }
  };

  let time = 10;
  logOutTimerCallback();
  const logOutTimer = setInterval(logOutTimerCallback, 1000);

  return logOutTimer;
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
    labelDate.textContent = getDate(new Date());

    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    currentAccount = account;
  } else {
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Данные некорректны!';

    currentAccount = { ...accountEmpty };
  }

  updateUI();
  if (currentLogOutTimer) {
    clearInterval(currentLogOutTimer);
  }
  currentLogOutTimer = startLogoutTimer();
};

const transfer = function (e) {
  e.preventDefault();

  const transferAmount = +inputTransferAmount.value;
  const recipientNickname = inputTransferTo.value;
  const recipientAccount = accounts.find(
    (account) => account.nickname === recipientNickname
  );

  inputTransferTo.value = '';
  inputTransferAmount.value = '';

  if (
    transferAmount > 0 &&
    currentAccount.balance >= transferAmount &&
    recipientAccount &&
    currentAccount.nickname !== recipientAccount.nickname
  ) {
    currentAccount.transactions.push({
      datetime: new Date().toISOString(),
      currency: currentAccount.currency,
      value: -transferAmount,
    });
    recipientAccount.transactions.push({
      datetime: new Date().toISOString(),
      currency: currentAccount.currency,
      value: transferAmount,
    });

    updateUI();
    clearInterval(currentLogOutTimer);
    currentLogOutTimer = startLogoutTimer();
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
    currentAccount = { ...accountEmpty };
    updateUI();
    clearInterval(currentLogOutTimer);
  }
};

const loan = function (e) {
  e.preventDefault();

  const loanAmount = Math.floor(inputLoanAmount.value);
  if (
    loanAmount > 0 &&
    currentAccount.transactions.some(
      (trans) => trans.value >= (loanAmount * 10) / 100
    )
  ) {
    setTimeout(function () {
      currentAccount.transactions.push({
        datetime: new Date().toISOString(),
        currency: currentAccount.currency,
        value: loanAmount,
      });

      updateUI();
    }, 3000);
  }

  inputLoanAmount.value = '';
  clearInterval(currentLogOutTimer);
  currentLogOutTimer = startLogoutTimer();
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

  if (currentAccount.userName === '') {
    labelTimer.textContent = '00:00';
    labelDate.textContent = '';

    containerApp.style.opacity = 0;
    inputCloseNickname.value = '';
    inputClosePin.value = '';
    labelWelcome.textContent = 'Войдите в свой аккаунт';
  }
};

const displayTransactions = function ({ transactions, locale }, sort = false) {
  containerTransactions.innerHTML = '';

  const transactionsSort = sort
    ? transactions.slice().sort((x, y) => x.value - y.value)
    : transactions;

  transactionsSort.forEach(function (trans, index) {
    const transType = trans.value > 0 ? 'deposit' : 'withdrawal';
    const transDate = getDate(new Date(trans.datetime), locale, true);

    const transactionRow = `
    <div class="transactions__row">
      <div class="transactions__type transactions__type--${transType}">
        ${index + 1} ${transType}
      </div>
      <div class="transactions__date">${transDate}</div>
      <div class="transactions__value">${getCurrency(
        trans.value,
        trans.currency,
        locale
      )}</div>
    </div>
    `;
    containerTransactions.insertAdjacentHTML('afterbegin', transactionRow);
  });
};

const displayBalance = function (account) {
  account.balance = account.transactions
    .map((trans) => trans.value)
    .reduce((prev, curr) => prev + curr, 0);
  labelBalance.textContent = getCurrency(
    account.balance,
    account.currency,
    account.locale
  );
};

const displayTotal = function ({ transactions, interest, currency, locale }) {
  const depositesTotal = transactions
    .filter((trans) => trans.value > 0)
    .map((trans) => trans.value)
    .reduce((acc, trans) => acc + trans, 0);
  labelSumIn.textContent = getCurrency(depositesTotal, currency, locale);

  const withdrawalsTotal = transactions
    .filter((trans) => trans.value < 0)
    .map((trans) => trans.value)
    .reduce((acc, trans) => acc + trans, 0);
  labelSumOut.textContent = getCurrency(withdrawalsTotal, currency, locale);

  const interestTotal = transactions
    .filter((trans) => trans.value > 0)
    .map((trans) => (trans.value * interest) / 100)
    .filter((interest) => {
      return interest >= 5;
    })
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = getCurrency(interestTotal, currency, locale);
};

// Execute

let currentAccount,
  currentLogOutTimer,
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
