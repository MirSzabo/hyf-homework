//Candy helper
//How would you change your script if 'boughtCandyPrices' should not be a list of numbers, but a list of objects? namely 'boughtCandy'.
const candys = {
        "sweet": 0.5,
        "chocolate": 0.7,
        "toffee": 1.1,
        "chewing-gum": 0.03
    }

const boughtCandy = {
      "sweet": 0,
      "chocolate": 0,
      "toffee": 0,
      "chewing-gum": 0
    };

function addCandy(candyType, weight) {
    const candyPrice = candys[candyType.toLowerCase()] * weight;
    boughtCandy[candyType] = boughtCandy[candyType] + candyPrice;
}

addCandy("sweet", 20);
addCandy("chocolate", 50);
addCandy("toffee", 10);
addCandy("chewing-gum", 450);
addCandy("sweet", 50);

console.log(boughtCandy);

const amountToSpend = Math.random() * 100;
console.log(amountToSpend);
function canBuyMoreCandy(boughtCandy) {
    const totalPrice = Object.values(boughtCandy).reduce((total, price) => {
        return total + price
      }, 0); 
    console.log(totalPrice);
    if (amountToSpend > totalPrice) {
        console.log("You can buy more, so please do!")
        return true;
    } else {
        console.log("Enough candy for you!")
        return false;
    }
  }
  
canBuyMoreCandy(boughtCandy); 