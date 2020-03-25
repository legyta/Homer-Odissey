const express = require("express");
const authRouter = express.Router();

authRouter.post("/signup", function(req, res, next) {
  res.send("I am in POST signup");
});

var post = { id: 1, title: "Hello MySQL" };
var query = connection.query("INSERT INTO posts SET ?", post, function(
  error,
  results,
  fields
) {
  if (error) res.status(500).end();

  res.end();
});

module.exports = authRouter;
