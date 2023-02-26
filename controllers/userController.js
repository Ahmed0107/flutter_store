const User = require("../models/userModel");

const signIn = async (req, res) => {
  const { email, password } = req.body;

  const foundedUser = await User.findOne({ email: email, password: password });

  if (foundedUser) {
    res.send("exist");
  } else {
    res.send("not-exist");
  }
};

const addUser = async (req, res) => {
  const { username, email, password } = req.body;

  const foundedUser = await User.findOne({ email: email });

  if (foundedUser) {
    res.send("Email exist");
  } else {
    const newUser = new User({
      username: username,
      email: email,
      password: password,
    });

    newUser
      .save()
      .then(() => res.send("user added"))
      .catch(() => res.send("user not added"));
  }
};

module.exports = {
  addUser,
  signIn,
};
