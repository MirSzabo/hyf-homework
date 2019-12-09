const express = require("express");
const route = express.Router();
const reviews = require("../data/reviews");

// Respond with the json for all reviews
route.get("/reviews", (req, res) => {
  res.json(reviews);
});

//Respond with the json for the review with the corresponding id
route.get("/reviews/:id", (req, res) => {
  const { id } = req.params;
  const isFound = reviews.some(review => review.id === parseInt(id));
  const isNumber = Number.isInteger(parseInt(id));

  if (isFound && isNumber) {
    res.send(
      reviews.filter(review => {
        return review.id === parseInt(id);
      })
    );
  } else {
    res.status(400).json({ msg: `No review with id of ${id}` });
  }
});

module.exports = route;
