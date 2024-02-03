const express = require("express");
const cookieparser = require("cookie-parser")
const app = express();
require("dotenv").config();
const cookieparser =require('cookie-parser');
const port = 3003;

// user router mdidleware file

const userRoute = require("./routes/userRoute");
const dbConnection = require("./Config/db");
const noteRoute = require("./routes/notesRouter");
// user route middleware
app.use(express.json());
app.use(cookieparser())
app.use("/api/users", userRoute);
app.use("/api/notes",noteRoute);
// note route
app.use("/api/notes",noteRoute)
app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`Listening on port ${port}`);
  }
});
