
const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

const averageDolphins = calcAverage(85, 54, 41);
const averageKoalas = calcAverage(23, 34, 27);

console.log(averageDolphins, averageKoalas);

function checkWinner(averageDolphins, averageKoalas) {

    if (averageDolphins >= 2 * averageKoalas) {
        console.log(`Dolphins win ${averageDolphins} vs ${averageKoalas}`);
    } else if (averageKoalas >= 2 * averageDolphins) {
        console.log(`Koalas win ${averageKoalas} vs ${averageDolphins}`);
    } else {
        console.log(`Nobody won. Dolphins ${averageDolphins} : ${averageKoalas} Koalas`);
    }

}

checkWinner(averageDolphins, averageKoalas);