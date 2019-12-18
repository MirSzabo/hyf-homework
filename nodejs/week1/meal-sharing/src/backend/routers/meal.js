const express = require ('express');
const router = express.Router();
const meals = require("../data/meals");

//Respond with the json for a random meal
router.get("/meal", (req, res) => {
    res.send(meals[Math.floor(Math.random() * meals.length)]);
  });

module.exports = router;