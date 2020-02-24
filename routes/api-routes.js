const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/example", (req, res) => {
  res.send("message from back end: success");
});

router.get("/all", (req, res) => {
  db.Todo.find().then(todos => res.send(todos));
});

router.post("/new", (req, res) => {
  db.Todo.create({ text: req.body.text }).then(todo => res.send(todo));
});

module.exports = router;
