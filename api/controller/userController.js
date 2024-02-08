require("dotenv").config();
const dbConnection = require("../Config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign(id, process.env.TOKEN_SECRET);
};

const register = (req, res) => {
  const data = req.body;

  dbConnection.query(
    `SELECT * FROM users WHERE email = '${data.email}' OR username = '${data.username}';`,
    async (err, result) => {
      if (err) {
        console.error(err);
        return;
      } else {
        if (result.length > 0) {
          console.log("Already exists");
          res.status(304).json({ error: "User already exists" });
          return;
        } else {
          const salt = await bcrypt.genSalt();
          const hashed_password = await bcrypt.hash(data.password, salt);
          data.password = hashed_password;
          dbConnection.query("INSERT INTO users SET ?", data, (err, result) => {
            if (err) {
              console.log("\x1b[41mDataBaseError:\x1b[0m", err.message);
              res.status(500).json({ error: "Cannot complete task" });
              return;
            }

            console.log("Created new user: ", data.username);

            const new_user = {
              username: data.username,
              email: data.email,
              id: result.insertId,
            };
            console.log(new_user);

            const token = createToken(new_user);

            res.cookie("token", token);
            res.status(200).json({ registered_as: new_user });
          });
        }
      }
    }
  );
};

const login = async (req, res) => {
  const userdata = req.body;

  dbConnection.query(
    `SELECT * FROM users WHERE email = '${userdata.email}' OR username = '${userdata.username}';`,
    async (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        if (result.length > 0) {
          const auth = await bcrypt.compare(
            userdata.password,
            result[0].password
          );
          if (auth) {
            console.log(`Logged in as ${result[0].username}`);
            const logged_user = {
              id: result[0].id,
              username: result[0].username,
              email: result[0].email,
            };
            const token = createToken(logged_user);
            res.cookie("token", token);
            res.status(200).json({ logged_as: logged_user });
          } else {
            console.log(
              `\x1b[41mPasswordError:\x1b[0m Password for ${userdata.username} is incorrect`
            );
            res.status(401).json({ error: "incorrect password" });
          }
        } else {
          // if not matches found it returns 404 not found
          res.status(404).json({ error: "not found" });
        }
      }
    }
  );
};

const logout = (req, res) => {
  res.cookie("token", "");
  res.send("Logged out successfully");
};

const protect = (req, res, next) => {
  const token = req.cookies["token"];

  jwt.verify(token, process.env.TOKEN_SECRET, (err, payload) => {
    if (err) {
      console.log("Could not log user in:-", err.message);
      res.status(401).json({
        status: false,
        message: "YOu are not logged in",
      });
      return;
    }
    const user = payload;

    console.log(user);

    req.user = user;
    next();
  });
};

const all_users = (req, res) => {
  const results = [];
  // returns all users in the database in the json format with key all_users
  dbConnection.query("SELECT * FROM users", (err, result) => {
    for (i of result) {
      const users = {
        id: i.id,
        username: i.username,
        email: i.email,
      };
      results.push(users);
    }

    console.log("All users displayed");
    res.status(200).json({ all_users: results });
  });
};

module.exports = { register, login, all_users, protect, logout };
