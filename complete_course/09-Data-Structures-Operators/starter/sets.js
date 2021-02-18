'use strict';

// collection of unique values => duplicates are removed

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);

console.log(ordersSet.has('Pizza'));

console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');

ordersSet.delete('Risotto');
console.log(ordersSet);

// values cannot be retrieved from sets

// ordersSet.clear(); // delete all elements from set

for (const order of ordersSet) console.log(order);

// USE Case

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// view unique array of "jobs"

const staffUnique = [...new Set(staff)]; // staffUnique to be an array
console.log(staffUnique);

console.log(new Set(staff).size);

console.log(new Set('vieriumihaialexandru').size);
