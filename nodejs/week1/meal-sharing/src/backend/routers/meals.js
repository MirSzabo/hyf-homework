const express = require ('express');
const router = express.Router();
const meals = require("../data/meals");

//Respond with the json for all the meals
router.get("/meals", (req, res) => {
    res.send(meals);
  });

module.exports = router;

