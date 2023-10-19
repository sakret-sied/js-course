'use strict';

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
  container.style.opacity = 1;
};

const getCountryAndNeighbour = function (countryName) {
  const request1 = new XMLHttpRequest();
  request1.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
  request1.send();
  request1.addEventListener('load', function () {
    const [data1] = JSON.parse(this.responseText);
    displayCountry(data1);
    const [firstNeighbour] = data1.borders;
    if (!firstNeighbour) {
      return;
    }

    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://restcountries.com/v3.1/alpha/${firstNeighbour}`,
    );
    request2.send();
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      displayCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('russia');
