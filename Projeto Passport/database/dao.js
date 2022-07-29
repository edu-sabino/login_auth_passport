// get the client
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  port: "3306",
  database: "login",
});

module.exports = {
  findById: function (id) {
    connection.promise().query("select * from users where id=?;", [id]);
  },

  findByUsername: function (username) {
    connection
      .promise()
      .query("select * from users where login=?;", [username]);
  },
};

/* simple query
connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

// with placeholder
connection.query(
  "SELECT * FROM `table` WHERE `name` = ? AND `age` > ?",
  ["Page", 45],
  function (err, results) {
    console.log(results);
  }
); */
