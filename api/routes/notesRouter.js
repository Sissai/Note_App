const express = require("express");
const router = express.Router();
const { postNotes, getNotes, updateNotes, deleteNotes } = require("../controller/notesController");



// post notes
router.post("/psot",postNotes)
router.get("/get",getNotes)
router.post("/update", updateNotes);
router.delete("/delete", deleteNotes);


module.exports = router;