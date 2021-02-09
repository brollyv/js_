let cupsOfCoffee = prompt('s');
let energyPill = prompt('z');

ifNaNConvertToString = function (num) {
  console.log(num, typeof num);
  if (Object.is(NaN, num)) {
    num = String(num);
  }
};

someRandomFunction = function (random) {
  while (typeof random !== 'number') {
    random = prompt(
      `Please insert a valid number! => How many ${random} did you had ? <=`
    );
    random = Number(random);
    console.log(typeof random);
    if (Object.is(NaN, random)) {
      random = String(random);
    }
  }
};

someRandomFunction(cupsOfCoffee, energyPill);
// someRandomFunction(energyPill);

// while (typeof cupsOfCoffee !== 'number') {
//   cupsOfCoffee = prompt(
//     'Please insert a valid number! => How many cups of coffe did you had ? <='
//   );
//   cupsOfCoffee = Number(cupsOfCoffee);

//   // checking to see if NaN is NaN . In JS the NaN is not equal to NaN -> the workaround is below

//   //   if (Object.is(NaN, cupsOfCoffee)) {
//   //     cupsOfCoffee = String(cupsOfCoffee);
//   //   }
//   ifNaNConvertToString(cupsOfCoffee);
// }

// while (typeof energyPill !== 'number') {
//   energyPill = prompt(
//     'Please insert a valid number! => How many caffeine Pills did you had ? <='
//   );
//   energyPill = Number(energyPill);

//   // checking to see if NaN is NaN . In JS the NaN is not equal to NaN -> the workaround is below

//   if (Object.is(NaN, energyPill)) {
//     energyPill = String(energyPill);
//   }
// }

const caffeineInOneCoffe = 50;
const caffeineInEnergyPill = 75;

caffeineCalculator = function () {
  return cupsOfCoffee * caffeineInOneCoffe + energyPill * caffeineInEnergyPill;
};

alert('Your current caffeine intake is: ' + caffeineCalculator() + ' mg');
