const humidities = [32, 45, 29, 19, "error", 58, 71, 47, 33, 42, 51, 49];
const numbers = [];

humidities.forEach((element) => {
    if (typeof element === "number") {
        numbers.push(element);
    }
});

const min = Math.min(...numbers);
console.log(min);
const max = Math.max(...numbers);
console.log(max);
const average = max - min;
console.log(average);
