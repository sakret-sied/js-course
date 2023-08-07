"use strict";

const events = new Map([
    [19, "Goal"],
    [21, "Substitution"],
    [43, "Goal"],
    [56, "Substitution"],
    [69, "Yellow card"],
    [73, "Substitution"],
    [75, "Yellow card"],
    [79, "Substitution"],
    [81, "Red card"],
    [93, "Goal"],
]);

// 1
const gameEvents = [...new Set(events.values())];
console.log("1:", gameEvents);

// 2
for (const [minute, event] of events) {
    minute >= 75 && event === "Yellow card" && events.delete(minute);
}
console.log("2:", events);

// 3
const getTimeFromNumber = (number) => {
    const minutes = Math.floor(number);
    const seconds = Math.floor((number % 1) * 60);
    return new Map().set("minutes", minutes).set("seconds", seconds);
};
const getGameTime = (map) => {
    const lastKey = Array.from(map)[map.size - 1][0];
    return lastKey > 90 ? lastKey : 90;
};

const avarageNumber = getGameTime(events) / events.size;
const avarageTime = getTimeFromNumber(avarageNumber);
console.log(
    "3:",
    `Avarage time is ${avarageTime.get("minutes")} minutes ${avarageTime.get(
        "seconds"
    )} seconds (${avarageNumber})`
);

// 4
console.log("4:");
for (const [key, value] of events) {
    console.log(`[${key <= 45 ? "FIRST" : "SECOND"} HALF] ${key}: ${value}`);
}
