const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.DB)
  .then(() => console.log("Database cnnected"))
  .catch(() => console.log("Can't cnnect t Database"));

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('users', UserSchema)

module.exports = User


