const express = require("express");
const route = express.Router();
const reservations = require("../data/reservations");

// Respond with the json for all reservations
route.get("/reservations", (req, res) => {
  res.json(reservations);
});

//Respond with the json for the reservation with the corresponding id
route.get("/reservations/:id", (req, res) => {
  const { id } = req.params;
  const isFound = reservations.some(
    reservation => reservation.id === parseInt(id)
  );
  const isNumber = Number.isInteger(parseInt(id));

  if (isFound && isNumber) {
    res.send(
      reservations.filter(reservation => {
        return reservation.id === parseInt(id);
      })
    );
  } else {
    res.status(400).json({ msg: `No reservation with id of ${id}` });
  }
});

module.exports = route;
