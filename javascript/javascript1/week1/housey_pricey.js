const volumeInMeters = [8 * 10 * 10, 5 * 11 * 8];
const gardenSizeInM2 = [100, 70];

const housePricePeter = volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300;
const housePriceJulia = volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300;

const PETER_HOUSE_COST = 2500000;
const JULIA_HOUSE_COST = 1000000;

function howMuchYouPay(housePrice, houseCost, name) {
    if (housePrice > houseCost) {
        console.log (`${name} is paying too much`);
        } else {
            console.log (`${name} is paying too little`);
        }
}

howMuchYouPay(housePricePeter, PETER_HOUSE_COST, "Peter");
howMuchYouPay(housePriceJulia, JULIA_HOUSE_COST, "Julia");


