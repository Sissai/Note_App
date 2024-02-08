const { request } = require("express");
const dbConnection = require("../Config/db");

const postNotes = (req, res) => {
  const text = req.body.text;
  const user = req.user.id;
  try {
    dbConnection.query("INSERT INTO notes (user_id, note_text) VALUES (?,?)", [
      user,
      text,
    ]);
    res.send("Note Successfully Posted!!");
  } catch (error) {
    console.log("Unable to post your note");
    res.send("Unable to post your note");
  }
};

const getNotes = async (req, res) => {
  const user = req.user;

  const results = await dbConnection.query(
    "SELECT * FROM notes WHERE user_id=?",
    user.id
  );
  res.send(results[0]);
};

module.exports = { postNotes, getNotes };
