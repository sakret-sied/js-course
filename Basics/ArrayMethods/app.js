const numbers = [23, 54, 4, 31, 11];
let result;

result = numbers.length;
result = Array.isArray(numbers);
result = numbers.indexOf(4);

result = numbers.push(7);
result = numbers.pop();
result = numbers.unshift(3);
result = numbers.shift();
result = numbers.push(1, 22, 333);
result = numbers.unshift(1, 22, 333);
result = numbers.splice(1, 1);
result = numbers.splice(1, 3);

result = numbers.reverse();
result = numbers.slice(0, 2);
result = numbers.concat(result);

console.log(numbers);
console.log(result);
