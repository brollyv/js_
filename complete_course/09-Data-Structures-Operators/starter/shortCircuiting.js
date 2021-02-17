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

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
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

// Logical operator: Use ANY data type, return any data type,
// short-circuiting

// if a value is truthy it will immediately return that value (the next operand will not be evaluated)

console.log('---- OR ----');

console.log(3 || 'Jonas'); // after evaluating 3 and see that is a truthy value it will no longer evaluate 'Jonas' as well it will return 3

console.log('' || 'Jonas'); // => Jonas

console.log(true || 0); // => true

console.log(undefined || null); // => null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // => Hello

//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// AND operator works in exact opposite way of the OR operator
console.log('---- AND ----');

console.log(0 && 'Jonas'); // => returns 0
console.log(7 && 'Jonas'); // => returns Jonas

console.log('Hello' && 23 && null && 'jonas'); // => null

// Practical example

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/**
 *  COCLUSION : OR || operator returns the first truthy value or the last value if all of them are falsy
 *  AND && operator returns the first falsy value or the last value if all of them ar truthy
 *
 *  || used to set default value
 *  && used to execute code in the 2nd operator if the first one is true
 */
