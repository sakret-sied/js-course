"use strict";

const getRand = () => Math.floor(Math.random() * 100);
const getAvarage = (a, b, c) => Math.floor((a + b + c) / 3);
const getBonus = (a, b) => {
    let max, min, dept;
    if (a > b) {
        max = a;
        min = b;
        dept = "Первый отдел";
    } else {
        max = b;
        min = a;
        dept = "Второй отдел";
    }
    const bonus = Math.floor(((max - min) / min) * 100);
    return bonus > 30
        ? `${dept} получит ${bonus}% бонус`
        : "Никто ничего не получит";
};

const first = [getRand(), getRand(), getRand()];
console.log(first);
const second = [getRand(), getRand(), getRand()];
console.log(second);
const bonus = getBonus(getAvarage(...first), getAvarage(...second));
console.log(bonus);
