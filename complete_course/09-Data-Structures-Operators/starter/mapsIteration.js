'use strict';

const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct!🎉'],
  [false, 'Try again! ⛔️'],
]);

console.log(question);

// NOTE: returns same structure as Object.entries();
// Convert Objects to map

// cost hoursMap = new Map(Object.entries(openingHours));

// Iteration

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));
console.log(answer);
console.log(question.get(question.get('correct') === answer));

// Convert map to array

console.log([...question]);

//console.log(...question.entries());
console.log(...question.keys());
console.log(question.values());
