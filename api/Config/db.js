// setting up db connection
const mysql2 = require("mysql2");


const dbConnection = mysql2.createPool({
  user: "newuser",
  database: "note_app",
  host: "localhost",
  password: "0922597281aA!",
  connectionLimit: 10,
});

dbConnection.execute("select 'test'", (err, result) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(result);
  }
});
