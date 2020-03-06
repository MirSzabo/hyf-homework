const express = require ('express');
const router = express.Router();
const meals = require("../data/meals");

//	Respond with the json for all the meals that can fit lots of people
router.get("/large-meals", (req, res) => {
    res.send(meals.filter(meal => meal.maxNumberOfGuests >= 7));
  });
module.exports = router;