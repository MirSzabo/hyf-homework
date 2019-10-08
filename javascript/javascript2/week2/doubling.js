const numbers = [1, 2, 3, 4];
const newNumbers= numbers
    .filter(element => element % 2 !== 0)
    .map(element => element *2);

    console.log(`The doubled numbers are ${newNumbers}.`);