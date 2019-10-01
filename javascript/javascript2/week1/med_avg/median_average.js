const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
const regex = /\B(?=(\d{3})+(?!\d))/g;
//change the number format
const newHousePrices = housePrices.map(function modify(number) {
    return number.toString().replace(regex, " ");
  });
  console.log(housePrices);
  console.log(newHousePrices);

//make a function that takes an array as parameter and returns the average of that parameter
function calculateAverage(prices) {
    const average = prices.reduce((a, b) => a + b) / prices.length;
    return average.toFixed(0); 
}
calculateAverage(housePrices);

//make a function that takes an array as parameter and returns the median of that parameter
//sorting the array and picking the middle number. If it’s an even amount of numbers you take the two numbers in the middle and average them.
function calculateMedian(prices) {
    prices.sort((a, b) => a > b ? 1 : -1); // sort in ascending order
    const price = Math.floor(prices.length / 2); //3
    return prices.length % 2 ? prices[price] : (prices[price - 1] + prices[price]) / 2; //3rd
}
console.log(calculateMedian(housePrices));

//create a function that calculates the median and the average and returns these two values in an object.
function createObject(prices) {
    const medianAndAverage = {
        average: calculateAverage(prices),
        median: calculateMedian(prices)
    }
    return medianAndAverage;
    //console.log(medianAndAverage);
}
createObject(housePrices);

//DOM
const newUl = document.querySelector("ul");
newHousePrices.forEach(addPrice);

function addPrice(price) {
    const newLi = document.createElement("li");
    newLi.textContent = price;
    newUl.appendChild(newLi);
}

document.getElementById("display").addEventListener("click", function(){
    document.getElementById("average").textContent = calculateAverage(housePrices).toString().replace(regex, " ");
    document.getElementById("median").innerHTML = calculateMedian(housePrices).toString().replace(regex, " ");
  });