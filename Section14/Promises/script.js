'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndBorder = function (countryName) {
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => response.json())
    .then((data) => {
      displayCountry(data[0]);
      const firstNeighbour = data[0].borders[0];
      if (!firstNeighbour) {
        return;
      }
      return fetch(`https://restcountries.com/v3.1/alpha/${firstNeighbour}`);
    })
    .then((data) => data.json())
    .then((data) => displayCountry(data[0], 'neighbour'));
};

getCountryAndBorder('russia');
