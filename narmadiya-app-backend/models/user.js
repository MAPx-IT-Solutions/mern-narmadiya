const getDB = require("../utils/database").getDB;
module.exports = class User {
  constructor(user) {
    this.userFullName = user.userFullName;
    this.userEmail = user.userEmail;
    this.userMobile = user.userMobile;
    this.userUserName = user.userUserName;
    this.userPassword = user.userPassword;
    this.userImage = user.userImage;
  }
  save() {
    const db = getDB();
    return db.collection("users").insertOne(this);
  }
  static findByEmail(email) {
    const db = getDB();
    return db
      .collection("users")
      .find({ userEmail: email })
      .next()
      .then((user) => {
        console.log(user);
        return user;
      })
      .catch((err) => {
        console.log(err)
      });
  }
  static findByUserName(username) {
    const db = getDB();
    return db
      .collection("users")
      .find({ userUserName: username })
      .next()
      .then((user) => {
        console.log("userName",user);
        return user;
      })
      .catch((err) => {
        console.log(err)
      });
  }
};
