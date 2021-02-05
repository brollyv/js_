


let markMass, markHeight, markBMI, johnMass, johnHeight, johnBMI; // BMI = mass / height ** 2 or mass = mass / (height * height)

// 1 

markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);
let markHigherBMI = markBMI > johnBMI;

console.log("1st DATA SET:  ", markHigherBMI);


// 2

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);
markHigherBMI = markBMI > johnBMI;
console.log("2nd DATA SET:  ", markHigherBMI);