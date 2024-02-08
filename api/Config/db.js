// setting up db connection
const mysql2 = require("mysql2");
require("dotenv").config();
const { usersTable, notesTable } = require("../Model/Model");
const dbConnection = mysql2.createPool({
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  host: "localhost",
  password: process.env.DB_PASS,
  connectionLimit: 10,
});

dbConnection.execute("select version()", (err, result) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(result);
  }
});

dbConnection.execute(usersTable, (err, result) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(result);
  }
});
dbConnection.execute(notesTable, (err, result) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(result);
  }
});

module.exports = dbConnection.promise();
