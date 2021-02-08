'use strict';
const alexArray = ['Alex', 'Vieriu', 2037 - 1988, 'programmer', ['Michael', 'Peter', 'Steven'], true];

// console.log(alexArray[0]);
// console.log(alexArray[1]);
// ..

// const newArray = [];

// for (let i = 0; i < alexArray.length; i++) {
//     // reading from alexArray
//     console.log(alexArray[i], typeof alexArray[i]);

//     // filling a new array
//     // newArray[i] = typeof alexArray[i];
//     newArray.push(typeof alexArray[i]);

// }
// console.log(newArray);

const years = [1991, 2007, 1969, 2020];

const ages = [];
for (let i = 0; i < years.length; i++) {

    ages.push(2037 - years[i]);
}

console.log(ages);

// Continue and Break 

// if typeof current element is not a String continue (it skips everything that is not a string)
console.log('----- ONLY STRING -----');
for (let i = 0; i < alexArray.length; i++) {
    if (typeof alexArray[i] !== 'string') continue;
    console.log(alexArray[i], typeof alexArray[i]);
}

// completely terminates the whole loop when number is encountered
console.log('----- BREAK WITH NUMBER -----');
for (let i = 0; i < alexArray.length; i++) {
    if (typeof alexArray[i] === 'number') break;
    console.log(alexArray[i], typeof alexArray[i]);
}