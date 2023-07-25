const color1 = "red";
const color2 = "orange";
const color3 = "yellow";
const color4 = "green";
const color5 = "blue";
const color6 = "indigo";
const color7 = "violet";

console.log(color2);

rainbowColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
];

rainbowColors[rainbowColors.length] = "dark blue";

rainbowColors.forEach((element) => {
    console.log(element);
});
console.log("\n");
console.log(rainbowColors[Math.floor(Math.random() * rainbowColors.length)]);
