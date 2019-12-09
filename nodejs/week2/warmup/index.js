const express = require("express");

const port = 3000;
const route = express();

route.get("/numbers/multiply/:first/:second", (req, res) => {
  const first = req.params.first;
  const second = req.params.second;
  res.send(`${first * second}
  `);
});
//http://localhost:3000/numbers/multiply/1/3

route.get("/numbers/add", (req, res) => {
  const { first } = req.query;
  const { second } = req.query;
  res.send(first + second);
});
//localhost:3000/numbers/add?first=3&second=7

route.listen(port, () => console.log(`server start at port ${port}`));
