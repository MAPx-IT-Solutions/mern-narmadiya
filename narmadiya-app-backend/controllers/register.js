const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.Register = async (req, res, next) => {
  const userByEmail =
    await User.findByEmail(req.body.userEmail)
  const userByUsername =
    await User.findByUserName(req.body.userUserName);
  if (userByEmail!== null||userByUsername!== null) {
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
