const jwt = require("jsonwebtoken");
require("dotenv").config();

const token = process.env.REACT_APP_TOKEN;

const generateToken = (userName) => {
  console.log("**** process.env.JWT_SECRET: ", token);
  return jwt.sign({ userName }, token, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
