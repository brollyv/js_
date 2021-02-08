// Loops in Loops

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----- Starting exercise ${exercise} -----`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise} -----> Lifting weights repetition ${rep}`);
    }
}