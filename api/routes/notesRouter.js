const express = require("express");
const router = express.Router();
const { postNotes, getNotes } = require("../controller/notesController");
const{protect} = require("../controller/userController")


// post notes
router.post("/post",protect,postNotes)
router.get("/get",protect,getNotes)


module.exports = router;