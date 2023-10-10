import {
  form,
  inputType,
  inputDistance,
  inputDuration,
  inputTemp,
  inputClimb,
} from './main.js';
import { Helper } from './helper.js';
import { Workout } from './workout/workout.js';

export class App {
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleClimbField);
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          console.warn('Невозможно получить ваше местоположение');
        },
      );
    }
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(e) {
    this.#mapEvent = e;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputTemp.value =
      inputClimb.value =
        '';
    form.classList.add('hidden');
  }

  _toggleClimbField() {
    inputClimb.closest('.form__row').classList.toggle('form__row--hidden');
    inputTemp.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();

    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;

    if (!Workout.list.includes(type)) {
      return;
    }

    let lastParam, forNumbers, forNumbersPositive;
    switch (type) {
      case Workout.running:
        lastParam = +inputTemp.value;
        forNumbersPositive = [distance, duration, lastParam];
        break;
      case Workout.cycling:
        lastParam = +inputClimb.value;
        forNumbersPositive = [distance, duration];
        break;
    }
    forNumbers = [distance, duration, lastParam];
    if (
      !Helper.areNumbers(...forNumbers) ||
      !Helper.areNumbersPositive(...forNumbersPositive)
    ) {
      return console.warn('Введите положительное число!');
    }

    workout = Helper.getWorkout(type, [
      [lat, lng],
      distance,
      duration,
      lastParam,
    ]);

    this.#workouts.push(workout);
    this._displayWorkout(workout);
    this._displayWorkoutOnSidebar(workout);
    this._hideForm();
  }

  _displayWorkout(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 200,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        }),
      )
      .setPopupContent(
        `${workout.type === Workout.running ? '🏃' : '🚵‍♂️'} ${
          workout.descrition
        }`,
      )
      .openPopup();
  }

  _displayWorkoutOnSidebar(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.descrition}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === Workout.running ? '🏃' : '🚵‍♂️'
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">км</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">мин</span>
      </div>
    
    `;
    if (workout.type === Workout.running) {
      html += `
          <div class="workout__details">
            <span class="workout__icon">📏⏱</span>
            <span class="workout__value">${workout.pace.toFixed(2)}</span>
            <span class="workout__unit">мин/км</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">👟⏱</span>
            <span class="workout__value">${workout.temp}</span>
            <span class="workout__unit">шаг/мин</span>
          </div>
      </li>
      `;
    }

    if (workout.type === Workout.cycling) {
      html += `
          <div class="workout__details">
            <span class="workout__icon">📏⏱</span>
            <span class="workout__value">${workout.speed.toFixed(2)}</span>
            <span class="workout__unit">км/ч</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🏔</span>
            <span class="workout__value">${workout.climb}</span>
            <span class="workout__unit">м</span>
          </div>
      </li>
      `;
    }

    form.insertAdjacentHTML('afterend', html);
  }
}
