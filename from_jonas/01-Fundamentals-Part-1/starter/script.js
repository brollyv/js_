
// let js = "amazing";
// if (js = "amazing") alert("Javascript is FUN!");

// console.log(40 + 8 + 23 - 10);

// const name = "Alex";
// let country = "Romania";
// let continent = "Europe";
// let population = 21542345;

// console.log(country);
// console.log(continent);
// console.log(population);

// console.log("Hi, I'm " + name + " , I'm from " + country + " which is located in " + continent + " and has a population of" + population);

// Data types

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// /*
//     ** typeof returns the type as a string.
// */

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "Alex");

// javascriptIsFun = "Yes!";
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);


// console.log(typeof null);


// let const var

// let age = 30;

// age = 31;

// const birthYear = 1988;
// //birthYear = 1990;

// // const legs; => error const always need to be initialized; 

// var job = "programmer";
// job = "qa";

// lastName = "Vieriu";
// console.log(lastName);   


// Basic Operators => transform values / combine values

// Math operators
// const now = 2037
// const ageAlex = now - 1988;
// const ageEva = now - 2019;
// console.log(ageAlex, ageEva);

// console.log(ageAlex * 2, ageAlex / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Alex";
// const lastName = "Vieriu"

// console.log(firstName + " " + lastName);

// // Asingment operators

// let x = 10 + 5; // 15
// x += 10;  // 25 (x = x + 10)
// x *= 4; // 100 (x = x * 4)
// x++; // 101 (x = x+1);
// x--;
// x--; // 99 ( x = x -1);
// console.log(x);

// // Comparison Operators

// console.log(ageAlex > ageEva); // > , < , >=, <=
// console.log(ageEva >= 18);

// const isFullAge = ageEva >= 18;

// console.log(now - 1991 > now - 2019);

// Operator precedence ( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence )

// const now = 2037
// const ageAlex = now - 1988;
// const ageEva = now - 2019;
// console.log(now - 1991 > now - 2019);

// let x, y;

// x = y = 25 - 10 - 5;  // x = y = 10 => y = 10, x = 10;

// console.log("x: ", x, "y: ", y);

// console.log("ageAlex: ", ageEva, "ageEva: ", ageEva);
// let averageAge = ageAlex + ageEva / 2;
// console.log("Average Age Without parenthesis: ", averageAge);
// averageAge = (ageAlex + ageEva) / 2;
// console.log("Average Age With parenthesis // Correct: ", averageAge);


// Strings and template literals

// const firstName = "Alex";
// const job = "programmer";
// const birthYear = 1991;
// const currentYear = 2021;
// const alex = "I'm " + firstName + ", a" + job + (currentYear - birthYear) + " years old " + job + "!";

// console.log(alex);

// const alexNew = `I'm ${firstName}, a ${job} ${currentYear - birthYear} years old ${job}!`;// template literals

// console.log("Template literals phrase: ", alexNew);

// console.log(`This is a 
// multiline phrase
// with template 
// literals`);

// if // else 

// let age = 15;

// if (age >= 18) {
//     console.log(`Sarah can start driving 🚗`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is not old enough to drive a car 🚨. Wait another ${yearsLeft} years`)
// }

// const birthYear = 2202;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

// Type Conversion and Coercion ( Conversion = manually convert from one type to another )
// Coercion = when JS converts from one type to another behind the scene 

// type Conversion
// const inputYear = `1991`;
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);

// console.log(Number('Alex')); // => results in NaN (invalid number)
// console.log(typeof NaN);

// console.log(String(23), 23);

// //  type Coercion

// console.log('I am ' + 23 + ' years old'); // everytime there is a operation (+) between Number and string the number will be converted into a String

// console.log('23' - '10' - 3); // the coercion is done the other way around from Strings to Numbers for these operations (- * /)

// console.log('22' / 2); // => 11 

// console.log('23' > '18'); // => true 

// let n = '1' + 1; // => result is 11 (concatenated 1 with 1)
// n = n - 1; // => 11 - 1 
// console.log(n); // the result will be the number 10

// console.log(2 + 3 + 4 + '5'); // => will result in 95. The numbers math is done first and then concats with 5

// console.log('10' - '4' - '3' - 2 - '5'); // => results in 15. Converts 10,4,3 to numbers 10-4-3-2 = 1 and then concats with 5  


// Truthy Flasy 


// 5 falsy values: 0, '' , undefined, null, NaN => will be converted to false when converted to bol

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('test'));
// console.log(Boolean({}));


// const money = 10;

// if (money) {
//     console.log(`Don't spend it all`);
// } else {
//     console.log(`You should get a job`);
// }

// let height = 0;

// if (height) {
//     console.log(` YAY, Height is defined`);
// } else {
//     console.log(`Height IS NOT UNDEFINED`);
// }

//  Equal and Strictly equal operators ==  and ===

// const age = '18';

// if (age === 18) console.log('You just became an adult !');

// if (age == 18) console.log(`You've just became an adult !`);


// const favourite = prompt(`What's your favourite number?`);
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 23) {  // '23' == 23 (does type coercion)
//     console.log(`Cool! 23 is an amazing number`);
// }

// if (Number(favourite) === 23) {
//     console.log(`Strict equal with the number from prompt`);
// }

// const otherNo = Number(prompt(`What's your other favourite no. ?`));

// if (otherNo !== 44) {
//     console.log(`Number is not equal to 44`)
// } else {
//     console.log(`No is equal to 44`);
// }

// Logical Operators 


// const hasDriversLicense = true;
// const hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (!shouldDrive) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone should drive...`);
// }

// const isTired = true;

// console.log(hasDriversLicense || hasGoodVision || isTired);

// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone else should drive`);
// }


// SWITCH statement

// const day = 'thursday';

// switch (day) {
//     case 'monday': // day === 'monday' 
//         console.log('Plan course structure');
//         console.log('Go to coding meet-up');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy weekend');
//         break;
//     default:
//         console.log('Not a valid day.');
// }

// statement written as if else

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meet-up');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy weekend');
// } else {
//     console.log('Not a valid input');
// }


// Statements and Expressions 

// expression => piece of code that produces a value (ex: 3+4, 1991, true && false && !false); 

//23 + 18
//1991

// statement => bigger piece of code that doesn't produce value by itself. (if else statement, switch); performs actions but doesn't produce value 

// if (23 > 10) {
//     const str = '23 is bigger';
// }


// Ternary Operator (Coditional Operator)


const age = 23;


// if age >= 10 execute this                      else execute this
//age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink coffee ☕️');

const drink = age >= 18 ? 'wine 🍷' : 'coffee ☕️';

console.log('1', drink)

let drink2;

if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'coffee ☕️';
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'coffee ☕️'}`);







