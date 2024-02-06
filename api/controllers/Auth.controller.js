const User = require("../models/User");
const bcrypt = require("bcryptjs");
const bcryptSalt = 10;

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const hashedPassword = bcrypt.hashSync(password, bcryptSalt)

  try {
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.json("Signup successfull");
  } catch (error) {
    response.status(422).json(error);
  }
};

module.exports = signup;
