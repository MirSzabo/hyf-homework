const express = require ('express');
const router = express.Router();
const reservations = require("../data/reservations");

// Respond with the json for all reservations
router.get('/reservations', (req, res) => {
  res.send(reservations);
});

module.exports = router;
