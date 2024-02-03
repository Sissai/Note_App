const express = require('express')
const router = express.Router()
const { postNotes, getNotes } = require("../controller/notesController");

// user controller functions

const{register,login,checkuser}=require('../controller/userController.js')

// register route

router.post('/register',register)

// login user

router.post("/login", login);


// check user

router.get("/check", checkuser);




module.exports = router