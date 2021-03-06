'use strict';
// Arrow functions

// return happens implicitly only for one liner functions

const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1988);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1988, 'Alex'));
console.log(yearsUntilRetirement(1980, 'Bob'));

// Arrow functions do not get the "this" keyword