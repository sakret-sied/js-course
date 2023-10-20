'use strict';

class Country {
  static btn = document.querySelector('#btn-country');
  static container = document.querySelector('#countries-container');

  #countryCode;

  async getCountryByGPS(lat, lon) {
    try {
      const url = `https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}`;
      const data = await this.#getResponse(url);
      const city = data.address.city ?? data.address.city_district;
      console.log(`You are in ${city}, ${data.address.country}`);
      await this.#getCountryAndNeighbourByCode(data.address.country_code);
    } catch (e) {
      console.error(e.message);
    }
  }

  async getUserCountry() {
    try {
      const userPosition = await this.#getUserPosition();
      const { latitude: lat, longitude: lon } = userPosition.coords;
      const url = `https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}`;
      const data = await this.#getResponse(url);
      const city = data.address.city ?? data.address.city_district;
      console.log(`You are in ${city}, ${data.address.country}`);
      await this.#getCountryAndNeighbourByCode(data.address.country_code);
    } catch (e) {
      console.error(e.message);
    }
  }

  async #getUserPosition() {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  async #getCountryAndNeighbourByCode(countryCode) {
    this.#countryCode = countryCode;
    try {
      const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;
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

const data = [
  [35.756, 139.256],
  [48.857, 2.358],
  [40.708, -74.051],
];
// data.forEach(([lat, lon]) => new Country().getCountryByGPS(lat, lon));

Country.btn.addEventListener('click', function () {
  new Country().getUserCountry();
});
