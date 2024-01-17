const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const {
  post_note,
  getNotes,
  updateNote,
  deleteNote,
} = require("../controller/notesController.js");

router.post("/post", userController.protect, post_note);
router.get("/get", userController.protect, getNotes);
router.post("/update", userController.protect, updateNote);
router.delete("/delete", userController.protect, deleteNote);

module.exports = router;
