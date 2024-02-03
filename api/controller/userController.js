
require("dotenv").config()
const { json } = require("express");
const dbConnection = require("../Config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

const newUser={
  id:5,
  username:"username",
  password:"123456",
  hashed_password:"hashed_password",
  session_id:5,
  email:"email@gmail.com"
}





const createToken = (id)=>{
  return jwt.sign(id, process.env.TOKEN_SECRET);
}


const register = async (req, res) => {

const data =req.body 



try {
  const existingUser= await dbConnection.query(
  `SELECT * from users where username='${data.username}' `)

  console.log(existingUser[0])
  if (existingUser[0].length > 0) {
    res.send("User Already Exists");
    return;


  }


const salt =await bcrypt.genSalt()
const hashed_password=await bcrypt.hash(data.password, salt)
data.password = hashed_password


  const result = await dbConnection.query("INSERT INTO users SET ?", data)
  const user = {
  username:data.username,
  email:data.email,
id: result.insertId
}

const token = createToken(user)

res.cookie("token", token)

// decoding

const decodedData = jwt.verify(token,process.env.TOKEN_SECRET)

  res.status(200).json(`User Successfully Registered: ${data.username}`);
} catch (error) {
  console.log(error.message)
}


}


const login = async (req, res) => {
  const userData=req.body

  
  try {
      const existingUser = await dbConnection.query(
        `SELECT * from users where username='${userData.username}' AND email='${userData.email}' `
      );
      console.log(existingUser[0]);
      if(existingUser[0].length>0){
const auth = bcrypt.compare(userData.password, existingUser[0][0].password);

       if (auth){

const userData = {
  username:existingUser[0][0].username,
  id: existingUser[0][0].id,
email:existingUser[0][0].email
}

        const token = createToken(userData)
        console.log(token)

        res.cookie("token", token)

        const decodedData = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log(decodedData)
        res.json({"Logged in as":existingUser[0][0].username})
        console.log('User successfully logged in')
       }else{
        res.send("Incorrect Password")
       }
      }else{
        res.send("User Does Not Exist")
      }
  } catch (error) {
    console.log(error.message)
  }
  
};

const checkuser = (req, res) => {
  res.send("check user");
};
const protect = (req, res, next)=>{
  const token = req.cookies["token"]
  jwt.verify(token,process.env.TOKEN_SECRET,(err,payload)=>{
    if(err)
    
    {console.log('user not loged')
    res.send('user not send')}
    else{req.user=payload
    next()
    }

  })
}


const logout = (req,res)=>{
res.cookie("token", '')
res.send("Successfully logged out")
}


const protect= (req, res, next)=>{
  

  const token = req.cookies["token"]
jwt.verify(token,process.env.TOKEN_SECRET,(error, payload)=>{
  if (error){
    console.log("Could not log user in", error.message)
  res.status(401).json({message:"you are not logged in"})
  } else {
    req.user=payload
    next()
  }

})
}

module.exports = { register, login,logout, checkuser, protect };
