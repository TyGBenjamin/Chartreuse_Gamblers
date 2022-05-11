const jwt = require('jsonwebtoken')

const generateToken = (userName) => {
    console.log("**** process.env.JWT_SECRET: ", process.env.JWT_SECRET);
    return jwt.sign({ userName }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

module.exports = generateToken;