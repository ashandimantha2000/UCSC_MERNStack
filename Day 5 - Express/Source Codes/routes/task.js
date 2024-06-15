const express = require("express");
const router = express.Router();

router.get("/task", function (req, res) {
  res.send("Hellooooo");
});

router.get("/products/:electronics/:laptops?", function (req, res) {
  const electronics = req.params.electronics;
  const laptops = req.params.laptops;

  if (laptops) {
    res.send("Showing " + laptops + " in " + electronics);
  } else {
    res.send("Showing products for " + electronics);
  }
});
module.exports = router;
