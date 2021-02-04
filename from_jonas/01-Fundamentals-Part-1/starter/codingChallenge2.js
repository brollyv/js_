


let markMass, markHeight, markBMI, johnMass, johnHeight, johnBMI; // BMI = mass / height ** 2 or mass = mass / (height * height)

// 1 

markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;

markBMI = (markMass / markHeight ** 2).toFixed(2);

johnBMI = (johnMass / johnHeight ** 2).toFixed(2);

if (markBMI > johnBMI) {
    console.log(`🙍🏻‍♂️ Mark's BMI is (${markBMI}) higher than  🙍🏻‍🙍🏿‍♂️ John's BMI (${johnBMI})`)
} else {
    console.log(`  🙍🏻‍🙍🏿‍♂️ John's BMI (${johnBMI}) higher than 🙍🏻‍♂️ Mark's BMI is (${markBMI})`)
}
