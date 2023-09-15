const randomInterval = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

const calculateTips = (bill) => Math.ceil(bill < 20 ? bill * 0.2 : bill * 0.15);

const calculateAverage = (array) => {
    let summary = 0;
    let count = 0;
    array.forEach((element) => {
        if (typeof element !== 'number') {
            return;
        }
        summary += element;
        count++;
    });
    return Math.ceil(summary / count);
};

const bills = [];
while (bills.length < 10) {
    bills.push(randomInterval(0, 1000));
}
console.log(bills);

const tips = [];
const total = [];
bills.forEach((bill, index) => {
    const tip = calculateTips(bill);
    tips[index] = tip;
    total[index] = bill + tip;
});
console.log(tips);
console.log(total);

console.log(calculateAverage(tips));
console.log(calculateAverage(total));
