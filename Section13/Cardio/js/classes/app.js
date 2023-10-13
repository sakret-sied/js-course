import AppStorage from './app.storage.js';
import Elements from './elements.js';
import Factory from './factory.js';
import Helper from './helper.js';
import Workout from './workouts/workout.js';

export default class App {
  #map;
  #mapEvent;
  #markers = [];
  #workouts = [];

  constructor() {
    this.#getPosition();
    this.#workouts = AppStorage.getWorkouts();
    this.#displayAllSidebars(this.#workouts);
    Elements.form.reset();
    Elements.clearWorkouts.addEventListener(
      'click',
      this.#clearConfirm.bind(this),
    );
    Elements.form.addEventListener('submit', this.#addWorkout.bind(this));
    Elements.inputType.addEventListener(
      'change',
      this.#toggleClimbEvent.bind(this),
    );
    Elements.popupConfirmClean.addEventListener(
      'close',
      this.#cleanWorkouts.bind(this),
    );
    Elements.sortWorkouts.addEventListener('change', this.#sort.bind(this));
    Elements.workouts.addEventListener('click', this.#selectWorkout.bind(this));
  }

  #getPosition() {
    if (!navigator.geolocation) {
      return;
    }
    navigator.geolocation.getCurrentPosition(
      this.#loadMap.bind(this),
      function () {
        console.warn('Невозможно получить ваше местоположение');
      },
    );
  }

  #loadMap(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this.#mapClick.bind(this));
    this.#displayAllMarkers(this.#workouts);
  }

  #mapClick(e) {
    this.#mapEvent = e;
    this.#showForm();
  }

  #showForm() {
    Elements.form.reset();
    Elements.form.classList.remove('hidden');
    Elements.inputDistance.focus();
  }

  #hideForm() {
    Elements.form.reset();
    Elements.form.classList.add('hidden');
  }

  #toggleClimbEvent(e) {
    this.#toggleClimb(e.target.value);
  }

  #toggleClimb(type) {
    const isClimb = type === Workout.cycling;
    Elements.inputClimb
      .closest('.form__row')
      .classList.toggle('form__row--hidden', !isClimb);
    Elements.inputTemp
      .closest('.form__row')
      .classList.toggle('form__row--hidden', isClimb);
  }

  #addWorkout(e) {
    e.preventDefault();

    const id = Elements.inputId.value;
    const distance = +Elements.inputDistance.value;
    const duration = +Elements.inputDuration.value;
    const type = Elements.inputType.value;
    const forNumbers = [distance, duration];
    const forNumbersPositive = [...forNumbers];
    let obj, index, workout;

    if (!Workout.list.includes(type)) {
      return;
    }

    if (id) {
      obj = this.#workouts.find((item) => item.id === id);
      index = this.#workouts.indexOf(workout);
    } else {
      const { lat, lng } = this.#mapEvent.latlng;
      obj = { coords: [lat, lng] };
    }
    obj.distance = distance;
    obj.duration = duration;

    switch (type) {
      case Workout.running:
        obj.temp = +Elements.inputTemp.value;
        forNumbers.push(obj.temp);
        forNumbersPositive.push(obj.temp);
        break;
      case Workout.cycling:
        obj.climb = +Elements.inputClimb.value;
        forNumbers.push(obj.climb);
        break;
    }
    if (
      !Helper.areNumbers(...forNumbers) ||
      !Helper.areNumbersPositive(...forNumbersPositive)
    ) {
      return console.warn('Введите положительное число!');
    }

    workout = Factory.getWorkout(type, obj);
    if (index) {
      this.#workouts[index] = workout;
      this.#displayAllSidebars(this.#workouts);
    } else {
      this.#workouts.push(workout);
      this.#displayMarker(workout);
      this.#displaySidebar(workout);
    }

    this.#hideForm();
    AppStorage.setWorkouts(this.#workouts);
  }

  #selectWorkout(e) {
    if (e.target.classList.contains('workout__btn--edit')) {
      return this.#editWorkout(e);
    }
    if (e.target.classList.contains('workout__btn--remove')) {
      return this.#removeWorkout(e);
    }
    this.#moveToMarker(e);
  }

  #editWorkout(e) {
    const workout = this.#findWorkout(e);
    if (!workout) {
      return;
    }

    this.#showForm(e);
    this.#toggleClimb(workout.type);

    Elements.inputId.value = workout.id;
    Elements.inputDistance.value = workout.distance;
    Elements.inputDuration.value = workout.duration;
    Elements.inputType.value = workout.type;
    switch (workout.type) {
      case Workout.running:
        Elements.inputTemp.value = workout.temp;
        break;
      case Workout.cycling:
        Elements.inputClimb.value = workout.climb;
        break;
    }
  }

  #removeWorkout(e) {
    const liWorkout = e.target.closest('li.workout');

    const workout = this.#workouts.find(
      (workout) => workout.id === liWorkout.dataset.id,
    );
    if (workout) {
      this.#workouts.splice(this.#workouts.indexOf(workout), 1);
      AppStorage.setWorkouts(this.#workouts);
    }

    const marker = this.#markers.find(
      (marker) => marker.id === liWorkout.dataset.id,
    );
    if (marker) {
      this.#markers.splice(this.#markers.indexOf(marker), 1);
      this.#map.removeLayer(marker.obj);
    }

    liWorkout.remove();
  }

  #moveToMarker(e) {
    const workout = this.#findWorkout(e);
    if (!workout) {
      return;
    }
    this.#map.setView(workout.coords, 13, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
    workout.click();
  }

  #findWorkout(e) {
    const workoutElement = e.target.closest('.workout');
    if (!workoutElement) {
      return false;
    }
    return this.#workouts.find((item) => item.id === workoutElement.dataset.id);
  }

  #cleanWorkouts() {
    if (Elements.popupConfirmClean.returnValue !== 'ok') {
      return;
    }

    this.#markers.forEach(({ obj }) => this.#map.removeLayer(obj));
    this.#markers = [];

    this.#workouts = [];
    this.#displayAllSidebars(this.#workouts);

    AppStorage.removeWorkouts();
  }

  #displayAllSidebars(workouts) {
    document
      .querySelectorAll('li.workout')
      .forEach((workout) => workout.remove());
    workouts.forEach((workout) => this.#displaySidebar(workout));
  }

  #displaySidebar(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <button class="workout__btn workout__btn--edit">✏️</button>
      <button class="workout__btn workout__btn--remove">❌</button>
      <h2 class="workout__title">${workout.description}</h2>
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

    Elements.form.insertAdjacentHTML('afterend', html);
  }

  #displayAllMarkers(workouts) {
    workouts.forEach((workout) => {
      this.#displayMarker(workout);
    });
  }

  #displayMarker(workout) {
    const marker = L.marker(workout.coords);
    this.#markers.push({ id: workout.id, obj: marker });
    marker
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
          workout.description
        }`,
      )
      .openPopup();
  }

  #clearConfirm() {
    Elements.popupConfirmClean.showModal();
  }

  #sort(e) {
    const prop = e.target.value;
    const workouts = this.#workouts.sort((x, y) => {
      switch (prop) {
        case 'type':
          return x[prop].localeCompare(y[prop]);
        default:
          return x[prop] - y[prop];
      }
    });
    this.#displayAllSidebars(workouts);
  }
}
