// setting up db connection
const mysql2 = require("mysql2");
require("dotenv").config();

const dbConnection = mysql2.createPool({
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  connectionLimit: 10,
});


dbConnection.execute("select 'test'", (err, result) => {
  if (err) {
    console.log(process.env.DB_DATABASE)
    console.log(err.message);
  } else {
    console.log(result);
  }
});

module.exports = dbConnection;
