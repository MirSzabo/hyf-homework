const express = require ('express');
const router = express.Router();
const reservations = require("../data/reservations");

//Respond with the json for a random reservation
router.get("/reservation", (req, res) => {
    res.send(reservations[Math.floor(Math.random() * reservations.length)]);
  });

module.exports = router;