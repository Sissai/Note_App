const express = require("express");
const router = express.Router();
// user controller functions

const {
  register,
  login,
  checkuser,
  all_users,
  logout,
} = require("../controller/userController.js");

// register user

router.post("/register", register);

// login user

router.post("/login", login);
router.get("/logout", logout);

// check user

router.get("/all", all_users);

module.exports = router;
