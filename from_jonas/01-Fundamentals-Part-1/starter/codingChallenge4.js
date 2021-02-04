const billValue = 1000;
const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

console.log(`The bill was ${billValue}, tip was ${tip}, the total value ${billValue + tip}`);

// let tip = billValue >= 50 && billValue <= 300 ? console.log(`Bill was: ${billValue}, tip was: ${275 * 0.15}, total value is ${billValue + tip}`);