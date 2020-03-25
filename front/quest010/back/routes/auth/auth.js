const express = require("express");
const authRouter = express.Router();
const connection = require("../../helpers/db.js");

// authRouter.post("/signup", function(req, res, next) {
//   res.send("I am in POST signup");
// });

authRouter.post("/signup", function(req, res, next) {
  const formFill = req.body;
  connection.query("INSERT INTO posts SET ?", formFill, (error, results) => {
    if (error) {
      results.status(500).send(error);
      results.end();
    } else {
      results.status(200).json(results);
      results.end();
    }
  });
});

module.exports = authRouter;
