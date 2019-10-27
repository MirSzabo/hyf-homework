function translateOneByOne(x, y, childNumber) {
  return new Promise(resolve => {
    moveElement(document.querySelector(`li:nth-child(${childNumber})`), {
      x,
      y
    }).then(() => {
      console.log(`Element has been moved`);
      resolve();
    });
  });
}

translateOneByOne(20, 300, 1)
  .then(() => translateOneByOne(400, 300, 2))
  .then(() => translateOneByOne(400, 20, 3));


/*const red = translateOneByOne(20, 300, 1);
const blue = translateOneByOne(400, 300, 2);
const green = translateOneByOne(400, 20, 3);

function translateAllAtOnce() {
Promise.all([red, blue, green]).then(()=> {
  console.log(`Elements has been moved`);
});
}

translateAllAtOnce();*/
