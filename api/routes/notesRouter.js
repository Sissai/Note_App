const express = require("express");
const router = express.Router();
const {
  postNotes,
  getNotes,
  updateNote,
  deleteNote,
} = require("../controller/notesController");
const { protect } = require("../controller/userController");

// post notes
router.post("/post", protect, postNotes);
router.get("/get", protect, getNotes);
router.post("/update", protect, updateNote);
router.delete("/delete", protect, deleteNote);

module.exports = router;
