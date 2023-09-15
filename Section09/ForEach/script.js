'use strict';

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['CNY', 'Chenese yuan'],
]);

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// for (const transaction of transactions) {
//     if (transaction > 0) {
//         console.log(`${transaction} was deposited`);
//     } else {
//         console.log(`${Math.abs(transaction)} was withdrew`);
//     }
// }

transactions.forEach(function (transaction, index) {
    if (transaction > 0) {
        console.log(`Transaction № ${index + 1}: ${transaction} was deposited`);
    } else {
        console.log(
            `Transaction № ${index + 1}: ${Math.abs(transaction)} was withdrew`
        );
    }
});
