
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}


const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}

console.log(mark, john);

const higherBMI = mark.calcBMI() > john.calcBMI() ? `${mark.firstName}'s BMI (${mark.BMI}) is higher than ${john.firstName}'s ${john.BMI}` : `${john.firstName}'s BMI (${john.calcBMi}) is higher than ${mark.firstName}'s (${mark.BMI})`;

// mark.calcBMI();
// john.calcBMI()
// if (mark.BMI > john.BMI) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
//   } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
//   }

console.log(higherBMI);