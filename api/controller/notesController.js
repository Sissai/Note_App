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

const updateNote = (req, res) => {
  const data = req.body;

  const user = req.user;
  try {
    dbConnection.query(
      "UPDATE notes SET note_text=? WHERE id=? AND user_id=?",
      [data.text, data.id, user.id]
    ),
      res.status(201).json({
        status: true,
        message: "Updated post successfully",
      });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
    console.log(err.message);
  }
};

const deleteNote = (req, res) => {
  const data = req.body;

  const user = req.user;

  console.log(data, user);

  try {
    dbConnection.query("DELETE FROM notes WHERE id=?", [data.id]);
    res.status(200).json({
      status: true,
      message: "Deleted note successfully",
    });
    console.log("Deleted note successfully");
  } catch (e) {
    console.log(err.message);
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = { postNotes, getNotes, updateNote, deleteNote };
