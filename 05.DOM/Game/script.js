'use strict';

const body = document.querySelector('body');
const guessMessage = document.querySelector('.guess-message');
const question = document.querySelector('.question');
const score = document.querySelector('.score');
const numberInput = document.querySelector('.number-input');
const hightscore = document.querySelector('.highscore');
const check = document.querySelector('.check');
const again = document.querySelector('.again');

const defaultScore = 20;
let scoreNumber = defaultScore;

const defaultHightscore = 0;
let highscoreNumber = defaultHightscore;

function randomSecret() {
  return Math.trunc(Math.random() * 20) + 1;
}
let questionNumber = randomSecret();

function init() {
  guessMessage.textContent = 'Начни угадывать';
  question.textContent = '???';
  score.textContent = scoreNumber = defaultScore;
  numberInput.value = '';
  questionNumber = randomSecret();
  body.style.backgroundColor = 'black';
  question.style.width = '25rem';
}

function checkNumber() {
  const guessNumber = Number(numberInput.value);
  if (!guessNumber) {
    return (guessMessage.textContent = 'Введите число!');
  }

  if (
    scoreNumber <= 0 ||
    (scoreNumber === 1 && guessNumber !== questionNumber)
  ) {
    return lose();
  }

  if (guessNumber === questionNumber) {
    return won();
  }

  if (guessNumber > questionNumber) {
    guessMessage.textContent = 'Слишком много';
  } else if (guessNumber < questionNumber) {
    guessMessage.textContent = 'Слишком мало';
  }
  score.textContent = --scoreNumber;
}

function won() {
  highscoreNumber =
    scoreNumber > highscoreNumber ? scoreNumber : highscoreNumber;
  hightscore.textContent = highscoreNumber;
  question.textContent = questionNumber;
  question.style.width = '50rem';
  guessMessage.textContent = 'Правильно';
  body.style.backgroundColor = 'green';
}

function lose() {
  guessMessage.textContent = 'Потрачено';
  body.style.backgroundColor = 'red';
}

check.addEventListener('click', checkNumber);
again.addEventListener('click', init);
