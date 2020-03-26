const express = require("express");
const authRouter = express.Router();
const connection = require("../../helpers/db.js");

// authRouter.post("/signup", function(req, res, next) {
//   res.send("I am in POST signup");
// });

authRouter.post("/signup", function(req, res, next) {
  const formFill = req.body;
  //const { flash, ...formFill } = req.body;

  connection.query("INSERT INTO users SET ?", formFill, (error, res) => {
    if (error) {
      res.status(500).json({ flash: error.message });
      res.end();
    } else {
      res.status(200).json({ flash: "User has been signed up!" });
      res.end();
    }
  });
});

module.exports = authRouter;
