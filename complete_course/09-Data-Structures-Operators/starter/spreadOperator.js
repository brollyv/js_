'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received!  ${this.starterMenu[starterIndex]} and  ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
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
const arr = [7, 8, 9];

const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const goodNewArray = [1, 2, ...arr];
console.log(goodNewArray);

console.log(...goodNewArray);

const newMenu = [...restaurant.mainMenu, 'Gochi']; // builds a new array
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu]; // copy of mainMenu from restaurant object

// Join Arrays together
const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(fullMenu);

// Iterables: arrays, strings, maps, sets. Not objects

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];

console.log(letters);
console.log(...str);

// Real world example

// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Ingredient 2?`),
//   prompt(`Ingredient 3?`),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects

const newRestaurant = { year: 1998, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };

restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy);
