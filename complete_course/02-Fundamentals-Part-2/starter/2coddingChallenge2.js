'use strict';
// const calctip = function (bill) {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.20;
//     }
// }

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(calctip(100), calctip(500));

const bills = [125, 525, 44];

const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[bills.length - 1])];

console.log(tips);

const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[bills.length - 1] + tips[tips.length - 1])];

console.log('Tips: ', tips);
console.log('Total: ', totals);