const express = require("express");
const pool = require("./../database");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
router.use (bodyParser.json());

//Body parser middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// api/meals/	GET	Returns all meals	GET api/meals/
router.get("/", (req, res) => {
  pool.query("SELECT * FROM meal", (error, results, fields) => {
   // res.json({});
    if (error) {
      return res.send(error);
    }
    res.json(results);
  });
});
/*
//api/meals/	POST	Adds a new meal	POST api/meals/
router.post("/", (req, res) => {
  const meal = req.body;
  console.log("meal:", meal);
  pool.query("INSERT into meal SET ?", meal, (error, results, fields) => {
    if (error) {
      return res.send(error);
    }
    res.json(results);
  });
});

//api/meals/{id}	GET	Returns meal by id	GET api/meals/2
router.get("/meals/:id", (req, res) => {
  pool.query(
    "SELECT * FROM meal WHERE id=?",
    [req.params.id],
    (error, results, fields) => {
      if (error) {
        return res.send(error);
      }
      res.json(results);
    }
  );
});

//api/meals/{id}	PUT	Updates the meal by id	PUT api/meals/2
router.put("/", (req, res) => {
  pool.query(
    "UPDATE `meal` SET `title`=? WHERE `id`=?",
    [req.body.employee_name, req.body.id],
    (error, results, fields) => {
      if (error) {
        return res.send(error);
      }
      res.json(results);
    }
  );
});*/

//api/meals/{id}	DELETE	Deletes the meal by id	DELETE meals/2*/
/*router.delete("/", (req, res) => {
  console.log(req.body);
  pool.query(
    "DELETE FROM `meal` WHERE `id`=?",
    [req.body.id],
    (error, results, fields) => {
      if (error) {
        return res.send(error);
      }
      res.end("Meal has been deleted!");
    }
  );
});*/

module.exports = router;
