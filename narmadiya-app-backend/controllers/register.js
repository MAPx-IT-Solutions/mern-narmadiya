const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.Register = async (req, res, next) => {
  const userByEmail = await User.findByEmail(req.body.userEmail);
  const userByUsername = await User.findByUserName(req.body.userUserName);
  if (userByEmail !== null || userByUsername !== null) {
    res.status(409).send("user already exist");
  } else {
    const userData = req.body;
    const saltNum = 11;
    const namak = await bcrypt.genSalt(saltNum);
    userData.userPassword = await bcrypt.hash(userData.userPassword, namak);
    const user = new User(userData);
    user.save().then(res.status(200).send("user created successfully "));
  }
};

exports.login = async (req, res) => {
  const user = await User.findByEmail(req.body.email);
  console.log(user)
  const match = await bcrypt.compare(req.body.password, user.userPassword);
  if (match) {
    req.session.user = user; //THIS SETS AN OBJECT - 'USER'
    req.session.save((err) => {
      if (err) {
        console.log(err);
      } else {
        res.json(req.session.user);
      }
    });
  }
  else{
    res.status(403).send("Invalid email or password")
  }
};
