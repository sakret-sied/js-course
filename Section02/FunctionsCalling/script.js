'use strict';

function colorMixer(color1, color2) {
    return `${color1} + ${color2}`;
}

function colorizer(item, color1, color2) {
    const color = colorMixer(color1, color2);
    return `The ${item} is ${color}`;
}

console.log(colorizer('car', 'red', 'black'));
