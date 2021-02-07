// Object methods

const alex = {
    firstName: 'Alex',
    lastName: 'Vieriu',
    birthYear: 1988,
    job: 'programmer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,
    location: 'Barcelona',
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, located in ${this.location} with ${this.hasDriversLicense ? 'a' : 'no'} driver license.`
    }
};

//console.log(alex.calcAge(1988));
//console.log(alex['calcAge'](1990));

console.log(alex.calcAge());

console.log(alex.age);
console.log(alex);

console.log(`${alex.firstName} is a ${alex.age} years old ${alex.job}, located in ${alex.location} and ${alex.hasDriversLicense ? 'he has a drivers license' : "he doesn't have a driver lincence"}`);


console.log(alex.getSummary());



