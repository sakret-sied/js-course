import { App } from './app.js';

export const form = document.querySelector('.form');
export const containerWorkouts = document.querySelector('.workouts');
export const inputType = document.querySelector('.form__input--type');
export const inputDistance = document.querySelector('.form__input--distance');
export const inputDuration = document.querySelector('.form__input--duration');
export const inputTemp = document.querySelector('.form__input--temp');
export const inputClimb = document.querySelector('.form__input--climb');

const app = new App();
