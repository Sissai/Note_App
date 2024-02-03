require("dotenv").config();
const bcrypt = require("bcrypt");
const { json } = require("express");
const dbConnection = require("../Config/db");
const jwt = require('jsonwebtoken');

const newUser={
  id:5,
  username:"username",
  password:"123456",
  hashed_password:"hashed_password",
  session_id:5,
  email:"email@gmail.com"
}
const creattoken=(id)=> {
  return jwt.sign(id,process.env.TOKEN_SECRET)
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
  const salt = await bcrypt.genSalt();
  const hasshedpassword = await bcrypt.hash(data.password,salt)
  data.password= hasshedpassword
  const result=await dbConnection.query("INSERT INTO users SET ?", data)
  const user= {username: data.username,
    email:data.email, Id:result.insertId
  }
  const token=creattoken(user)
 res.cookie('token',token)
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

       const auth = await bcrypt.compare(userData.password,
       existingUser[0][0].password)
       

       if (auth){
        const user= {username: existingUser[0][0].username,
          email:existingUser[0][0].email, id:existingUser[0][0].id

        }
        const token=creattoken(user)
       res.cookie('token',token)
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



module.exports = { register, login, checkuser, protect};
