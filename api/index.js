const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

const port = 3003;

// user router mdidleware file

const userRoute = require("./routes/userRoute");
const notesRoute = require("./routes/notesRoute");
const dbConnection = require("./Config/db");

// user route middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/notes", notesRoute);

// note route

app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`Listening on port ${port}`);
  }
});
