const weight = prompt('Enter your weight');
const height = prompt('Enter your height');
const bmi = (weight / Math.pow(height * 0.01, 2)).toFixed(1);
console.log(bmi);
const msg = `Your bmi is ${bmi} and its ${bmi >= 25 ? 'overweight' : (bmi >= 18.5 ? 'healthy' : 'underweight')}`;
console.log(msg);
alert(msg);
