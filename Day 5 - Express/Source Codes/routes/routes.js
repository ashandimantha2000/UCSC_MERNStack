const express = require("express");
const router = express.Router();

router.get("/hello", function (req, res) {
  res.send("Hello World from Express (GET)");
});

router.get("/bye", function (req, res) {
  res.send("Goodbye World from Express (POST)");
});

router.all("/all", function (req, res) {
  res.send("Calling All from Express (ALL)");
});

//dynamic route
// router.get('/:id', function(req, res){
//     res.send('The ID is ' +req.params.id);
// });

// router.get('/:name/:id', function(req, res){
//     res.send('Name is '+req.params.name +' and '+ 'ID is ' +req.params.id);
// });

router.get("/:id([0-9]{5})", function (req, res) {
  res.send("ID is " + req.params.id);
});

router.get("/events/:date(\\d{4}-\\d{2}-\\d{2})", function (req, res) {
    res.send("Date is " + req.params.date);
});


router.get("/files/:filename(\\w+\\.(jpg|png|gif))", function (req, res) {
    res.send("Filename is " + req.params.filename);
});

module.exports = router;
