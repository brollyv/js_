// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


const friends = ['Michael', 'Steven', 'Peter'];

// Add elements

friends.push('Jay'); // puts Jay in the array at the end
console.log(friends);

newLength = friends.push('Alex'); // push returns the new length of the Array
console.log(newLength);

friends.unshift('John'); // adds John at the beginning of the Array, also returns the new Array length
console.log(friends);

// Remove elements

friends.pop(); // remove last element of the Array;
console.log(friends);
const poppedFriend = friends.pop(); // returns the removed Element 
console.log(poppedFriend)

friends.shift(); // remove first element from the Array . Returns the element that was removed
console.log(friends);

// Other methods

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // reutrns -1 because it does not exist

console.log(friends.includes('Michael')); // returns true / false
console.log(friends.includes('Bob'));

friends.push(23);
console.log(friends.includes('23')); // returns false because it does not do type coercion. 

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter');
} else {
    console.log('too bad ...')
}

