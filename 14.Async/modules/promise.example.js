import ModuleWithCountry from '../classes/module.with.country.js';

export default class PromiseExample extends ModuleWithCountry {
  execute() {
    const btn = document.querySelector('.btn-country');
    const container = document.querySelector('.countries');

    const displayCountry = function (data, className = '') {
      const currencies = data.currencies;
      const currensyName = Object.values(currencies)[0].name;
      const currensySymbol = Object.values(currencies)[0].symbol;

      const languages = data.languages;
      const firstLanguage = Object.values(languages)[0];

      const html = `
    <article class="country ${className}">
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

      container.insertAdjacentHTML('beforeend', html);
    };

    const getResponse = async (url, errorMessage = 'Ошибка') => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(errorMessage);
      }
      return await response.json();
    };

    const displayCountryAndGetNeighbour = (data) => {
      displayCountry(data[0]);
      if (!data[0].borders) {
        throw new Error('Нет соседних стран');
      }
      const firstNeighbour = data[0].borders[0];
      return getResponse(
        `https://restcountries.com/v3.1/alpha/${firstNeighbour}`,
        'Нет соседних стран',
      );
    };

    const displayNeighbour = (data) => displayCountry(data[0], 'neighbour');

    const displayError = (e) =>
      container.insertAdjacentText(
        'beforeend',
        `Что-то пошло не так: ${e.message}`,
      );

    const showContainer = () => (container.style.opacity = 1);

    const hideBtn = () => (btn.style.display = 'none');

    const getCountryAndNeighbour = function (countryName) {
      getResponse(
        `https://restcountries.com/v3.1/name/${countryName}`,
        'Страна не найдена',
      )
        .then(displayCountryAndGetNeighbour)
        .then(displayNeighbour)
        .catch(displayError)
        .finally(showContainer);
    };

    btn.addEventListener('click', function () {
      hideBtn();
      getCountryAndNeighbour('russia');
    });
  }
}
