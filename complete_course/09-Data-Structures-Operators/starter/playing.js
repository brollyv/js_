'use strict';

const alex = {
  firstName: 'Mihai',
  middleName: 'Alexandru',
  lastName: 'Vieriu',
  dateOfBirth: [12, 12, 1988],
  hobbies: ['coding', 'sports', 'cooking', 'movies'],
  streetNames: ['Mihai Bravu', 'Miorita'],
  streetNumbers: ['85-93', '83N'],
  favoriteFood: 'Pizza',

  age: function (year) {
    console.log(year - this.dateOfBirth[2]);
  },
};

let [birthDay, birthMonth, birthYear] = alex.dateOfBirth;

let x = ([birthDay, birthMonth, birthYear] = [birthYear, birthMonth, birthDay]);
console.log(x);

console.log(birthDay, birthMonth, birthYear);

alex.age(2021);

const newHobbies = [alex.hobbies, ...x];

console.log(newHobbies);
