const express = require ('express');
const router = express.Router();
const meals = require("../data/meals");

//Respond with the json for all the meals that are cheap
router.get("/cheap-meals", (req, res) => {
    res.send(meals.filter(meal => meal.price <= 75));
  });

module.exports = router;