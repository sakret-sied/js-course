export default class Country {
  static URL = 'https://restcountries.com/v3.1/alpha/';

  btn = document.querySelector('#btn-country');
  container = document.querySelector('#countries-container');

  #countryCode;

  async getCountryByGPS(lat, lon) {
    try {
      const url = `https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}`;
      const data = await this.#getResponse(url);
      const city = data.address.city ?? data.address.city_district;
      console.log(`You are in ${city}, ${data.address.country}`);
      await this.getCountryAndNeighbourByCode(data.address.country_code);
    } catch (e) {
      console.error(e.message);
    }
  }

  async promiseAll() {
    const response = await Promise.all([
      Promise.resolve('Выполнено'),
      Promise.reject('Отклонено'),
      Promise.resolve('Выполнено'),
    ]);
    console.log(response);
  }

  async promiseAllSettled() {
    const response = await Promise.allSettled([
      Promise.resolve('Выполнено'),
      Promise.reject('Отклонено'),
      Promise.resolve('Выполнено'),
    ]);
    console.log(response);
  }

  async promiseAny() {
    const response = await Promise.any([
      Promise.resolve('Выполнено'),
      Promise.reject('Отклонено'),
      Promise.resolve('Выполнено'),
    ]);
    console.log(response);
  }

  async promiseRace() {
    const response = await Promise.race([
      this.#getResponse(Country.URL + 'fr'),
      this.#getResponse(Country.URL + 'us'),
      this.#getResponse(Country.URL + 'ru'),
    ]);
    console.log(response);
  }

  async getUserCountry() {
    try {
      const userPosition = await this.#getUserPosition();
      const { latitude: lat, longitude: lon } = userPosition.coords;
      const url = `https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}`;
      const data = await this.#getResponse(url);
      const city = data.address.city ?? data.address.city_district;
      console.log(`You are in ${city}, ${data.address.country}`);
      await this.getCountryAndNeighbourByCode(data.address.country_code);
    } catch (e) {
      console.error(e.message);
    }
  }

  async getCountryAndNeighbourByCode(countryCode) {
    this.#countryCode = countryCode;
    try {
      const url = Country.URL + countryCode;
      const response = await this.#getResponse(url, 'Страна не найдена');
      const neighbour = await this.#displayCountryAndGetNeighbour(response);
      this.#displayNeighbour(neighbour);
    } catch (e) {
      this.#displayError(e);
    } finally {
      this.#showContainer();
      this.#hideBtn();
    }
  }

  async #getUserPosition() {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  async #getResponse(url, errorMessage = 'Ошибка') {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(errorMessage);
    }
    return await response.json();
  }

  async #displayCountryAndGetNeighbour(data) {
    this.#displayCountry(data[0]);
    if (!data[0].borders) {
      throw new Error('Нет соседних стран');
    }
    const firstNeighbour = data[0].borders[0];
    return this.#getResponse(
      Country.URL + firstNeighbour,
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
      this.container.insertAdjacentHTML('beforeend', html);
    }
  }

  #displayError(e) {
    this.container.insertAdjacentText(
      'beforeend',
      `Что-то пошло не так: ${e.message}`,
    );
  }

  #showContainer() {
    this.container.style.opacity = 1;
  }

  #hideBtn() {
    if (this.btn) {
      this.btn.style.display = 'none';
    }
  }
}
