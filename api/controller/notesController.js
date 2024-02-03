
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



const getNotes= async (req,res)=>{

   const data =req.body



   try {
     const results = await dbConnection.query("SELECT * from notes WHERE ?", data)
  console.log(results[0])
  res.send(results[0])
   } catch (error) {
    console.log(error)
     console.log("Unable to find any Notes");
     res.send("Unable to find any Notes");
   }
}

const updateNotes = async (req,res)=>{
const data= req.body

try {
  await dbConnection.query("UPDATE notes SET  note_text=? WHERE id=? ", [data.note_text, data.id]);
  res.send("Note Updated")
} catch (error) {
  console.log(error.message)
  res.send("Error Updating your note")

}

}

const deleteNotes = async (req,res)=>{
  const data = req.body

  try {
    await dbConnection.query("DELETE FROM notes WHERE  ? ", data);
    res.send("Note Delted");
  } catch (error) {
      console.log(error.message);
      res.send("Error Deleting your note");
  }
}


module.exports  ={postNotes,getNotes, updateNotes, deleteNotes}