'use strict';
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        // after return the function immediatelly exits, no longer continues. 
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} already retired`);
        return -1;
    }

    //return `${firstName} retires in ${retirement} years`;

}





console.log(yearsUntilRetirement(1991, 'Alex'));

console.log(yearsUntilRetirement(1950, 'Mike'));