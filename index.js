const express = require("express");
const app = express();
require("dotenv").config();

const port = 3003;

// user router mdidleware file

const userRoute = require("./api/routes/userRoute");
const dbConnection = require("./api/Config/db");

// user route middleware
app.use(express.json());

app.use("/api/users", userRoute);

// note route

app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`Listening on port ${port}`);
  }
});
