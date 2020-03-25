const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pwrd123",
  database: "homerOdysey_db"
});
module.exports = connection;
