const express = require("express");
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

const app = express();

/*const mealsRouter = require ('./routes/meals.js');
const cheapMealsRouter = require ('./routes/cheap-meals.js');
const largeMealsRouter = require ('./routes/large-meals.js');
const randomMealRouter = require ('./routes/meal.js');
const reservationRouter = require ('./routes/reservations.js');
const randomReservationRouter = require ('./routes/reservation.js');

app.get ('/meals', mealsRouter);
app.use ('/meals', mealsRouter); //???
app.get ('/cheap-meals', cheapMealsRouter);
app.get ('/large-meals', largeMealsRouter);
app.get ('/meal', randomMealRouter);
app.get ('/reservations', reservationRouter);
app.get ('/reservation', randomReservationRouter);*/

//Respond with the json for all the meals
app.get("/meals", (req, res) => {
    meals.forEach(meal => {
      meal.reviews = [];
      for (let review of reviews) {
        if (meal.id === review.mealId) {
          meal.reviews.push(review);
          delete review.mealId;
        }
      }
    });
    res.send(meals);
  });

//Respond with the json for all the meals that are cheap
app.get("/cheap-meals", (req, res) => {
  res.send(meals.filter(meal => meal.price <= 75));
});
//	Respond with the json for all the meals that can fit lots of people
app.get("/large-meals", (req, res) => {
  res.send(meals.filter(meal => meal.maxNumberOfGuests >= 7));
});
//Respond with the json for a random meal
app.get("/meal", (req, res) => {
  res.send(meals[Math.floor(Math.random() * meals.length)]);
});
//Respond with the json for all reservations
app.get("/reservations", (req, res) => {
  res.send(reservations);
});
//Respond with the json for a random reservation
app.get("/reservation", (req, res) => {
  res.send(reservations[Math.floor(Math.random() * reservations.length)]);
});

//Express error handling middleware
app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("Error no page found");
});

app.listen(3000, () => console.log(`Server on port 3000`));
