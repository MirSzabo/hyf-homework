const express = require("express");
const app = express();

const port = 3000;

const meals = require("./data/meals");
const reviews = require("./data/reviews");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//middleware
app.use((req, res, next) => {
  let time = new Date();
  time = `${time.getFullYear()}-${time.getMonth() +
    1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()} request received for path: ${
    req.url
  }`;
  console.log(time);
  next();
});

app.use((req, res, next) => {
  console.log("method: " + req.method);
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
const reservationRouter = require("./routers/reservations");
const reviewsRouter = require("./routers/reviews");

app.get("/meals", mealsRouter);
app.get("/meals/:id", mealsRouter);
app.get("/api/meals", mealsRouter);
app.get("/api/meals_limit", mealsRouter);
app.get("/api/meals_title", mealsRouter);
app.get("/api/meals_date", mealsRouter);
app.get("/reservations", reservationRouter);
app.get("/reservations/:id", reservationRouter);
app.get("/reviews", reviewsRouter);
app.get("/reviews/:id", reviewsRouter);

//Express error handling middleware
app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("Error no page found");
});

app.listen(port, () => console.log(`Server on port ${port}`));
