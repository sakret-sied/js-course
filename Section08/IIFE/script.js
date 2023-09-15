'use strict';

const runOneTime = function () {
    console.log('You will never see this function call again.');
};
// runOneTime();
// runOneTime();

(function () {
    console.log('You will never see this function call again.');
    const x = 1;
    var z = 3;
})();
// console.log(x); //ReferenceError: x is not defined
// console.log(z); //ReferenceError: z is not defined

(() => {
    console.log('You will never see this ARROW function call again.');
})();

{
    const w = 1;
    var y = 2;
}
// console.log(w); //ReferenceError: w is not defined
console.log(y);
