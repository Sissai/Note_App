
const register = (req, res) => {
  res.send("register user");
};


const login = (req, res) => {
  res.send("login user");
};

const checkuser = (req, res) => {
  res.send("check user");
};


module.exports={register,login,checkuser}