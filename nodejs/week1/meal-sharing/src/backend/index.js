const express = require("express");
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const app = express();

//middleware
app.use((req, res, next) => {
  console.log("method: " + req.method);
  next();
});
app.use((req, res, next) => {
  console.log("date: " + Date.now());
  next();
});
app.use((req, res, next) => {
  meals.forEach(meal => {
    meal.reviews = [];
    for (let review of reviews) {
      if (meal.id === review.mealId) {
        meal.reviews.push(review);
      // delete review.mealId;
      }
    }
  });
  next();
});

const mealsRouter = require("./routers/meals");
const cheapMealsRouter = require("./routers/cheap-meals");
const largeMealsRouter = require("./routers/large-meals");
const randomMealRouter = require("./routers/meal");
const reservationRouter = require("./routers/reservations");
const randomReservationRouter = require("./routers/reservation");

app.get("/meals", mealsRouter);
app.get("/cheap-meals", cheapMealsRouter);
app.get("/large-meals", largeMealsRouter);
app.get("/meal", randomMealRouter);
app.get("/reservations", reservationRouter);
app.get("/reservation", randomReservationRouter);

//Express error handling middleware
app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("Error no page found");
});

app.listen(3000, () => console.log(`Server on port 3000`));
