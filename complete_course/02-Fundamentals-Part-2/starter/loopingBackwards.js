'use strict';
const alexArray = ['Alex', 'Vieriu', 2037 - 1988, 'programmer', ['Michael', 'Peter', 'Steven']];

// Looping backwards

for (let i = alexArray.length - 1; i >= 0; i--) {
    console.log(i, alexArray[i], typeof alexArray[i]);
}
