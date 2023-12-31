'use strict';

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const players = [player0, player1];
const currents = [current0, current1];
const scores = [score0, score1];
const finalScore = 20;
let isFinished, totalScore, playerNumber, currentScore;

function init() {
  isFinished = false;

  totalScore = [0, 0];
  score0.textContent = totalScore[0];
  score1.textContent = totalScore[1];

  currentScore = 0;
  current0.textContent = currentScore;
  current1.textContent = currentScore;

  playerNumber = 0;
  player0.classList.remove('player--active', 'player--winner');
  player1.classList.remove('player--active', 'player--winner');
  player0.classList.add('player--active');

  dice.classList.add('hidden');
}

function roll() {
  if (isFinished) {
    return;
  }

  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  if (dice.classList.contains('hidden')) {
    dice.classList.remove('hidden');
  }
  dice.src = `dice${diceNumber}.png`;
  if (diceNumber !== 1) {
    currentScore += diceNumber;
    currents[playerNumber].textContent = currentScore;
  } else {
    switchPlayer();
  }
}

function switchPlayer() {
  currentScore = 0;
  currents[playerNumber].textContent = currentScore;
  players[playerNumber].classList.remove('player--active');
  playerNumber = Number(!playerNumber);
  players[playerNumber].classList.add('player--active');
}

function save() {
  if (isFinished) {
    return;
  }

  totalScore[playerNumber] += currentScore;
  scores[playerNumber].textContent = totalScore[playerNumber];
  if (totalScore[playerNumber] >= finalScore) {
    isFinished = true;
    players[playerNumber].classList.add('player--winner');
    players[playerNumber].classList.remove('player--active');
    dice.classList.add('hidden');
  } else {
    switchPlayer();
  }
}

document.addEventListener('DOMContentLoaded', init);
btnNew.addEventListener('click', init);
btnRoll.addEventListener('click', roll);
btnHold.addEventListener('click', save);
