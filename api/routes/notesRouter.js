const express = require("express");
const router = express.Router();
const { postNotes, getNotes } = require("../controller/notesController");



// post notes
router.post("/notes",postNotes)


module.exports = router;