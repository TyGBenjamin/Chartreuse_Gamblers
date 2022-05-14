const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, userName, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const user = await User.create({
    firstName,
    lastName,
    userName,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      token: generateToken(user.userName),
    });
  } else {
    res.status(400);
    throw new Error("Error Occured!");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;

  const user = await User.findOne({ userName });
  console.log("**** user: ", user);

  if (user && (await user.matchPassword(password, user.password))) {
    res.json({
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      token: generateToken(user.userName),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Name or Password!");
  }
});

module.exports = { registerUser, authUser };
