const { json } = require("express");
const dbConnection = require("../Config/db");

const newUser={
  id:5,
  username:"username",
  password:"123456",
  hashed_password:"hashed_password",
  session_id:5,
  email:"email@gmail.com"
}


const register = async (req, res) => {

const data =req.body 
// console.log(data)

// dbConnection.query(
//   `SELECT * from users where username='${data.username}' `,
//   (err, result) => {
//     if (err) {
//       res.status(500);
//     } else {
//       if (result.length > 0) {
//         res.json("User Already Exists");
//       } else {
//         dbConnection.query("INSERT INTO users SET ?", data, (err, result) => {
//           if (err) {
//             console.log("Database Error:", err.message);
//           } else {
//             res.status(200).json(`User Successfully Registered: ${data.username}`);
//           }
//         });
//       }
//     }
    
//   }
// );



try {
  const existingUser= await dbConnection.query(
  `SELECT * from users where username='${data.username}' `)
  console.log(existingUser[0])
  if (existingUser[0].length > 0) {
    res.send("User Already Exists");
    return;
  }
  await dbConnection.query("INSERT INTO users SET ?", data)
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
       if (userData.password===existingUser[0][0].password){
        res.json({"Logged in as":existingUser[0][0]})
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




module.exports = { register, login, checkuser };
