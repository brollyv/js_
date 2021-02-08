'use strict';
// Objects

const alex = {
    firstName: 'Alex',
    lastName: 'Vieriu',
    age: 2037 - 1988,
    job: 'programmer',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(alex);

// Dot notation

console.log(alex.lastName);

// Brackets notation

console.log(alex['firstName']);

const nameKey = 'Name';
console.log(alex['first' + nameKey]);
console.log(alex['last' + nameKey]);

const interestedIn = prompt('What do you want to know about me? Choose between firstName, lastName, age, job and friends');


if (alex[interestedIn]) {
    console.log(alex[interestedIn]);

} else {
    console.log('Wrong request ... Choose between firstName, lastName, age, job and friends');
}

alex.location = 'Barcelona';
alex['twitter'] = '@developful';
console.log(alex);

console.log(`${alex.firstName} has ${alex.friends.length} friends, and his best friend is ${alex.friends[0]}`);