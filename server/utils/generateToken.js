const jwt = require('jsonwebtoken')

const generateToken = (userName) => {
    return jwt.sign({userName},process.env.JWT_SECRET,{
        expiresIn: "30d", 
    });
};

module.exports = generateToken;