'use strict';
// While Loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// for while Loop we can only specify a condition

let rep = 1;
while (rep <= 10) {
    //   console.log(`While Loop ---> Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc((Math.random() * 6) + 1);
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc((Math.random() * 6) + 1);
    if (dice === 6) console.log('Loop is about to end ...');
}