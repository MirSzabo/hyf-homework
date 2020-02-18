const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Calculator using :param
//calculator/addition?firstParam=1&secondParam=2&secondParam=4
app.get("/calculator/addition", function(req, res) {
  const numbers = req.query;
  const valuesInOneArray = [].concat.apply([], Object.values(numbers));
  const valuesToNumbers = valuesInOneArray.map(Number);
  const result = valuesToNumbers.reduce((first, second) => {
    return first - second;
  });

  valuesToNumbers.includes(NaN)
  ? res.send("Please enter only numbers")
  : res.send(
      `The addition of the numbers ${valuesInOneArray} is ${result}`
    );
});

//calculator/subtraction?firstParam=1&secondParam=2&secondParam=4
app.get("/calculator/subtraction", function(req, res) {
  const numbers = req.query;
  const valuesInOneArray = [].concat.apply([], Object.values(numbers));
  const valuesToNumbers = valuesInOneArray.map(Number);
  const result = valuesToNumbers.reduce((first, second) => {
    return first - second;
  });

  valuesToNumbers.includes(NaN)
    ? res.send("Please enter only numbers")
    : res.send(
        `The subtraction of the numbers ${valuesInOneArray} is ${result}`
      );
});

//calculator/multiply?firstParam=1&secondParam=2&secondParam=4
app.get("/calculator/multiply", function(req, res) {
  const numbers = req.query;
  const valuesInOneArray = [].concat.apply([], Object.values(numbers));
  const valuesToNumbers = valuesInOneArray.map(Number);
  const result = valuesToNumbers.reduce((first, second) => {
    return first - second;
  });

  valuesToNumbers.includes(NaN)
  ? res.send("Please enter only numbers")
  : res.send(
      `The multiply of the numbers ${valuesInOneArray} is ${result}`
    );
});

//calculator/division?firstParam=1&secondParam=2&secondParam=4
app.get("/calculator/division", function(req, res) {
  const numbers = req.query;
  const valuesInOneArray = [].concat.apply([], Object.values(numbers));
  const valuesToNumbers = valuesInOneArray.map(Number);
  const result = valuesToNumbers.reduce((first, second) => {
    return first - second;
  });

  valuesToNumbers.includes(NaN)
  ? res.send("Please enter only numbers")
  : res.send(
      `The division of the numbers ${valuesInOneArray} is ${result}`
    );
});

//Calculator using req.body
//calculator?firstParam=1&secondParam=2 with the key method in the req.body set to multiply should respond with 2
app.post("/calculator", (req, res) => {
  const numbers = req.query;
  const valuesInOneArray = [].concat.apply([], Object.values(numbers));
  const valuesToNumbers = valuesInOneArray.map(Number);

  if (valuesToNumbers.includes(NaN)) {
    res.send("Please enter only numbers");
  } else if (operation === "addition") {
    const result = valuesToNumbers.reduce((first, second) => {
      return first + second;
    });
    res.send(`The addition of the numbers ${valuesInOneArray} is ${result}`);
  } else if (operation === "subtraction") {
    const result = valuesToNumbers.reduce((first, second) => {
      return first - second;
    });
    res.send(`The subtraction of the numbers ${valuesInOneArray} is ${result}`);
  } else if (operation === "multiply") {
    const result = valuesToNumbers.reduce((first, second) => {
      return first * second;
    });
    res.send(`The multiply of the numbers ${valuesInOneArray} is ${result}`);
  } else if (operation === "division") {
    const result = valuesToNumbers.reduce((first, second) => {
      return first / second;
    });
    res.send(`The division of the numbers ${valuesInOneArray} is ${result}`);
  } else {
    res.send(`Please enter valid operation key`);
  }
});

app.listen(port, () => console.log(`server start at port ${port}`));
