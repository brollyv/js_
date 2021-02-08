'use strict';
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0], friends[2]); // Michael & Peter

console.log(friends.length); // exact amount of elements in the Array

console.log(friends[friends.length - 1]); // gets last element from the Array


friends[2] = 'James';
console.log(friends);

// friends = ['Bob', 'Alice'];

const firstName = 'Mihai'
const alex = [firstName, 'Vieriu', 2037 - 1988, 'programmer', friends];
console.log(alex);
console.log(alex.length);

// Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge([years[years.length - 1]])];
console.log(ages);