const jwt = require('jsonwebtoken')
const token = 'secret_token';

const generateToken = (userName) => {
    console.log("**** process.env.JWT_SECRET: ", token);
    return jwt.sign({ userName }, token, {
        expiresIn: "30d",
    });
};

module.exports = generateToken;