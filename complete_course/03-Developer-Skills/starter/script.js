// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// function should now receive two arrays of temperatures

// understanding the problem

// With 2 arrays, should we implement functionality twice ? NO
// merge the two arrays

// 2. Breaking up into sub-problems

// How to merge 2 arrays

const calcTempAmplitudeNew = function (arr1, arr2) {
  const temps = arr1.concat(arr2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([1, 3, 4], [3, 5, 99]);
console.log(amplitudeNew);

// Debugging

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // fix issue
    value: Number(prompt('Degrees celsius: ')),
  };

  console.table(measurement);

  console.warn(measurement.value);
  console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
