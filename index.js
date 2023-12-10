const express = require('express')
const app = express()

const port = 3003

// user router mdidleware file

const userRoute = require('./api/routes/userRoute')

// user route middleware

app.use("/api/users", userRoute);

// note route



app.listen(port,(err)=>{
  if (err){
    console.log(err.message)
  } else {
    console.log(`Litsening on port ${port}`)
  }
})

