
const dbConnection = require("../Config/db");


const postNotes=(req,res)=>{
  const data = req.body
 try {
 dbConnection.query("INSERT INTO notes SET ?", data);
  res.send("Note Successfully Posted!!")
 } catch (error) {
  console.log("Unable to post your note")
  res.send("Unable to post your note");
 }
}



const getNotes= (req,res)=>{

}




module.exports  ={postNotes,getNotes}