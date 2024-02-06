const User = require("../models/User");
const bcrypt = require("bcryptjs");
const errorHandler = require("../utils/error");
const bcryptSalt = 10;

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcrypt.hashSync(password, bcryptSalt);

  try {
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.json("Signup successfull");
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
