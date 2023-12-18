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



dbConnection.execute("select version()", (err, result) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(result);
  }
});


dbConnection.execute(`CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  hashed_password VARCHAR(256) NOT NULL,
  session_id VARCHAR(256) NOT NULL,
  email VARCHAR(255) UNIQUE
  )`, (err, result) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(result);
  }
});


module.exports = dbConnection;
