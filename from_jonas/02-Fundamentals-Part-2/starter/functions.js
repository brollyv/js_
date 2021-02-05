// Functions

function logger() {
    console.log('This is a Logger function');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(3, 0);
console.log(appleJuice);
console.log(fruitProcessor(3, 4));

const appleOrangeJuice = fruitProcessor(2, 5);
console.log(appleOrangeJuice);

// not all functions need to return something or have params

