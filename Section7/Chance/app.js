"use strict";

const getVal = (name, attr = "value") =>
    Number(document.getElementById(name)[attr]);
const calculate = function () {
    const attack = getVal("attack");
    const armor = getVal("armor");
    const double = getVal("double", "checked");

    let chance = (attack - armor + 1) / 20;
    chance = double ? 1 - (1 - chance) ** 2 : chance;
    let percent = Math.floor(chance * 100);
    percent = percent > 100 ? 100 : percent < 0 ? 0 : percent;

    document.getElementById("result").textContent = `${percent}%`;
};
