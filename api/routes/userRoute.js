const express = require("express");
const router = express.Router();
const { postNotes, getNotes } = require("../controller/notesController");

// user controller functions

const {
  register,
  login,
  checkuser,
  logout,
} = require("../controller/userController.js");

// register route

router.post("/register", register);

// login user

router.post("/login", login);

// logout user

router.get("/logout", logout);

module.exports = router;
