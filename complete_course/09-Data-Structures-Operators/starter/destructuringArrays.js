'use strict';

// array destructuring => retrieve elem from arrays and store in variables

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// const [first, , third] = restaurant.categories;
// console.log(first, third);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i,j] = nested;
// console.log(i,j);

// (Nested) Destructuring in destructuring

const [i, q, [j, k]] = nested;

console.log(i, q, j, k);

// Default values

const [r = 1, s = 1, t = 1] = [8, 9];
console.log(r, s, t);

O;
