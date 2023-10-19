'use strict';

class Country {
  static btn = document.querySelector('.btn-country');
  static container = document.querySelector('.countries');

  #countryCode;

  getCountryAndNeighbourByCode(countryCode) {
    this.#countryCode = countryCode;
    this.#getResponse(
      `https://restcountries.com/v3.1/alpha/${countryCode}`,
      'Страна не найдена',
    )
      .then(this.#displayCountryAndGetNeighbour.bind(this))
      .then(this.#displayNeighbour.bind(this))
      .catch(this.#displayError.bind(this))
      .finally(this.#showContainer.bind(this));
    this.#hideBtn();
  }

  async #getResponse(url, errorMessage = 'Ошибка') {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(errorMessage);
    }
    return await response.json();
  }

  #displayCountryAndGetNeighbour(data) {
    this.#displayCountry(data[0]);
    if (!data[0].borders) {
      throw new Error('Нет соседних стран');
    }
    const firstNeighbour = data[0].borders[0];
    return this.#getResponse(
      `https://restcountries.com/v3.1/alpha/${firstNeighbour}`,
      'Нет соседних стран',
    );
  }

  #displayNeighbour(data) {
    this.#displayCountry(data[0], 'neighbour');
  }

  #displayCountry(data, className = '') {
    const currencies = data.currencies;
    const currensyName = Object.values(currencies)[0].name;
    const currensySymbol = Object.values(currencies)[0].symbol;

    const languages = data.languages;
    const firstLanguage = Object.values(languages)[0];

    const html = `
      <article class="country ${className}" data-country="${data.cca2.toLowerCase()}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
            +data.population / 1000000
          ).toFixed(1)} миллионов</p>
          <p class="country__row"><span>🗣️</span>${firstLanguage}</p>
          <p class="country__row"><span>💰</span>${currensySymbol} ${currensyName}</p>
        </div>
      </article>
      `;

    if (className) {
      document
        .querySelector(`article[data-country="${this.#countryCode}"]`)
        .insertAdjacentHTML('afterend', html);
    } else {
      Country.container.insertAdjacentHTML('beforeend', html);
    }
  }

  #displayError(e) {
    Country.container.insertAdjacentText(
      'beforeend',
      `Что-то пошло не так: ${e.message}`,
    );
  }

  #showContainer() {
    Country.container.style.opacity = 1;
  }

  #hideBtn() {
    Country.btn.style.display = 'none';
  }
}

Country.btn.addEventListener('click', function () {
  new Country().getCountryAndNeighbourByCode('ru');
});

// console.log('Начало теста');
// setTimeout(() => {
//   console.log('Таймер 0 секунд');
// }, 0);
// Promise.resolve('Выполненное Promise.resolve()').then((result) =>
//   console.log(result),
// );
// Promise.resolve('Выполненное Promise.resolve(for)').then((result) => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(result);
// });
// console.log('Конец теста');

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Происходит крутка баннера:');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('Цзинлю');
    } else {
      reject(new Error('Яньцин'));
    }
  }, 1000);
});

lotteryPromise.then((res) => console.log(res)).catch((e) => console.error(e));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('Прошла 1 секунда');
    return wait(1);
  })
  .then(() => {
    console.log('Прошло 2 секунды');
    return wait(1);
  })
  .then(() => {
    console.log('Прошло 3 секунды');
    return wait(1);
  })
  .then(() => {
    console.log('Прошло 4 секунды');
  });

Promise.resolve('Resolved').then((res) => console.log(res));
Promise.reject(new Error('Rejected')).catch((e) => console.error(e));
