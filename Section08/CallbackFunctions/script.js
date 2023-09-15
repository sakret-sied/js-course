'use strict';

const removeSpaces = function (text) {
    return text.replace(/ /g, '');
};
const upperFirstWord = function (text) {
    const [first, ...others] = text.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};
const converter = function (str, fun) {
    console.log(fun(str));
};

converter('Hello New World!', removeSpaces);
converter('Hello New World!', upperFirstWord);

const twice = (num) => console.log(num * 2);
[1, 2, 3].forEach(twice);
