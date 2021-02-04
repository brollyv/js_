
const averageDolphins = (97 + 112 + 134) / 3;
const averageKoalas = (109 + 95 + 123) / 3;
const minimumScore = 100;

if (averageDolphins > averageKoalas && averageDolphins >= minimumScore) {
    console.log(`Dolphins Team won with a average score of ${averageDolphins}`);
} else if (averageKoalas > averageDolphins && averageKoalas >= minimumScore) {
    console.log(`Koala Team won with a average score of ${averageKoalas}`);
} else if (averageDolphins < minimumScore && averageKoalas < minimumScore) {
    console.log(`No team scorred an average of 100 points`);
}
else {
    console.log(`DRAW => Dolphins: ${averageDolphins} : ${averageKoalas} Koalas`);
}