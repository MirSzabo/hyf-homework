const express = require("express");
const bodyParser = require("body-parser");
const meals = require("../data/meals");
const route = express.Router();

route.use(bodyParser.json());

// Respond with the json for all meals
route.get("/meals", (req, res) => {
  res.json(meals);
});

//Respond with the json for the meal with the corresponding id
route.get("/meals/:id", (req, res) => {
  const { id } = req.params;
  const isFound = meals.some(meal => meal.id === parseInt(id));
  const isNumber = Number.isInteger(parseInt(id));
  if (isFound && isNumber) {
    res.send(
      meals.filter(meal => {
        return meal.id === parseInt(id);
      })
    );
  } else {
    res.status(400).json({ msg: `No meal with id of ${id}` });
  }
});

//Get meals that has a price smaller than maxPrice
//http://localhost:3000/api/meals?maxPrice=90
route.use("/api/meals", (req, res) => {
  console.log(req.query);
  const { maxPrice } = req.query;
  if (!maxPrice) {
    res.status(400).json({ msg: "Invalid query parameter" });
  }

  const maxPriceMeals = meals.filter(meal => {
    return meal.price < Number(maxPrice);
  });

  res.send(maxPriceMeals);
});

//Get meals that partially match a title
//http://localhost:3000/api/meals_title?title="indian"
route.use("/api/meals_title", (req, res) => {
  console.log(req.query);
  const { title } = req.query;

  if (!title) {
    res.status(400).json({ msg: "Invalid query parameter" });
  }

  const titleMeals = meals.filter(meal => {
    const mealTitle = meal.title.toLowerCase().trim();
    const titleQueryModified = title
      .toLowerCase()
      .replace(/"/g, "")
      .trim();
    if (mealTitle.includes(titleQueryModified)) {
      return meal;
    }
  });
  res.send(titleMeals);
});

//Get meals that has been created after the date
//http://localhost:3000/api/meals_date?createdAfter=2019-12-08
route.use("/api/meals_date", (req, res) => {
  console.log(req.query);
  const { createdAfter } = req.query;

  if (!createdAfter) {
    res.status(400).json({ msg: "Invalid query parameter" });
  }

  const createdAfterMeals = meals.filter(meal => {
    return new Date(meal.createdAt) > new Date(createdAfter);
  });
  res.send(createdAfterMeals);
});

//Only specific number of meals
//http://localhost:3000/api/meals_limit?limit=2
route.use("/api/meals_limit", (req, res) => {
  console.log(req.query);
  const { limit } = req.query;

  if (!limit) {
    res.status(400).json({ msg: "Invalid query parameter" });
  }

  const limitMeals = meals.slice(0, limit);
  res.send(limitMeals);
});

module.exports = route;
