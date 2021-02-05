// Function Declarations vs Function Expressions
'use strict';
// Function Declaration
function calcAge1(birthYear) {

    return 2037 - birthYear;
}

const age1 = calcAge1(1988);
console.log(age1);

// Function Expression (anonymous function)
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);

// Differece -> we can call function declarations before they are defined in the code (not best practice)

console.log(callingBefore(2021));

function callingBefore(param) {
    return 2090 - param;
}