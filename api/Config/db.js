// setting up db connection
const mysql2 = require("mysql2");
require("dotenv").config();
const {usersTable,notesTable} = require("../Model/Model")
const dbConnection = mysql2.createPool({
  user: "newuser",
  database: "note_app",
  host: "localhost",
  password: "0922597281aA!",
  connectionLimit: 10,
});

dbConnection.execute("select version()", (err, result) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(result);
  }
});

dbConnection.execute(
  usersTable,
  (err, result) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(result);
    }
  }
);
dbConnection.execute(notesTable, (err, result) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(result);
  }
});


module.exports = dbConnection.promise()
