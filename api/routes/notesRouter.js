const express = require("express");
const router = express.Router();
const {
  postNotes,
  getNotes,
  updateNotes,
  deleteNotes,
} = require("../controller/notesController");
const { protect } = require("../controller/userController");

// post notes
router.post("/post", protect, postNotes);
router.get("/get", protect, getNotes);
// router.post("/update", protect, updateNotes);
// router.delete("/delete", protect, deleteNotes);

module.exports = router;
