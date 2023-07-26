"use strict";

const body = document.querySelector("body");
const guessMessage = document.querySelector(".guess-message");
const question = document.querySelector(".question");
const score = document.querySelector(".score");
const numberInput = document.querySelector(".number-input");
const hightscore = document.querySelector(".highscore");
const check = document.querySelector(".check");
const again = document.querySelector(".again");

const defaultScore = 20;
let scoreNumber = defaultScore;
let questionNumber = randomSecret();
let highscoreNumber = 0;

function randomSecret() {
    return Math.trunc(Math.random() * 20) + 1;
}

function reset() {
    guessMessage.textContent = "Начни угадывать";
    question.textContent = "???";
    score.textContent = scoreNumber = defaultScore;
    numberInput.value = "";
    questionNumber = randomSecret();
    body.style.backgroundColor = "black";
    question.style.width = "25rem";
}

function checkNumber() {
    const guessNumber = Number(numberInput.value);
    if (!guessNumber) {
        return (guessMessage.textContent = "Введите число!");
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
        more();
    } else if (guessNumber < questionNumber) {
        less();
    }
    score.textContent = --scoreNumber;
}

function less() {
    guessMessage.textContent = "Слишком мало";
}

function more() {
    guessMessage.textContent = "Слишком много";
}

function won() {
    highscoreNumber =
        scoreNumber > highscoreNumber ? scoreNumber : highscoreNumber;
    hightscore.textContent = highscoreNumber;
    question.textContent = questionNumber;
    question.style.width = "50rem";
    guessMessage.textContent = "Правильно";
    body.style.backgroundColor = "green";
}

function lose() {
    guessMessage.textContent = "Потрачено";
    body.style.backgroundColor = "red";
}

check.addEventListener("click", checkNumber);
again.addEventListener("click", reset);
