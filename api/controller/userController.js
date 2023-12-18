const dbConnection = require('../Config/db');

const newUser = {
  username: "Messai Haile",
  email: "mes@example.com",
  password: "1234567",
  hashed_password: "dkdk",
  session_id: "2445723"
}

const register = (req, res) => {
  // Get the request object and save it to a variable data
  const data = req.body;

  // Searches for the specified user with similar username or email
  // from the database
  dbConnection.query(`SELECT * FROM users WHERE email = '${data.email}' OR username = '${data.username}';`,
  (err, result) => {
    if (err) {
      console.error(err);
      return;
    } else {
      // if there are results with same username or email
      // return 304 meaning not modified
      if (result.length > 0) {
        console.log("Already exists");
	      res.status(304).json({error: 'User already exists'});
	      return;
      } else {
        // else insert a new user into db with the given credentials
        // return 200 and a registered_as key with data as value
        dbConnection.query("INSERT INTO users SET ?", data, (err, result) => {
    	    if (err) {
              console.log(data);
              console.log("DataBaseError:", err.message)
              res.status(500).json({error: 'Cannot complete task'});
              return;
            } 
            console.log("Created new user: ", data.username);

            res.status(200).json({registered_as: data});
        });
      }
    }
  });


/*	
  dbConnection.query("INSERT INTO users SET ?", newUser, (err, result) => {
    if (err) {
      console.error("Error inserting data: ", err);
      return;
    } 
    console.log("Created new user: ", newUser.username);
  });
  res.send(`Welcome ${newUser.username}!`);
*/
};



const login = (req, res) => {
  // Gets the request object and save it to userdata
  const userdata = req.body

  // Searches for a user with similar email and username from users in the database
  dbConnection.query(`SELECT * FROM users WHERE email = '${userdata.email}' AND username = '${userdata.username}';`,
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    } else {
      // if there is a result matching the above check the password
        // if password is correct it will log the user as the found user in the db
        // else it returns 401 incorrect password
      if (result.length > 0) {
        if (result[0].password === userdata.password) {
          console.log(`Logged in as ${userdata.username}`);
	        res.status(200).json({logged_as: result});
        } else {
          console.log('Incorrect password');
          res.status(401).json({error: 'incorrect password'});
        }
      } else {
        // if not matches found it returns 404 not found
        res.status(404).json({error: 'not found'});
      }
    }
  });
};

const checkuser = (req, res) => {
  res.send("check user");
};

const all_users = (req, res) => {
  const results = [];
  // returns all users in the database in the json format with key all_users
  dbConnection.query('SELECT * FROM users', (err, result) => {
    for (i of result) {
      results.push(i);
    }
    res.status(200).json({all_users: results});
  });
};


module.exports={ register, login, checkuser };
