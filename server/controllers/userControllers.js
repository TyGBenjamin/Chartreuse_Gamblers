const { restart } = require("nodemon");

const registerUser = async (req, res) => {
    const { firstName, lastName, userName, email, password}=req.body;

    res.json({
        firstName,
        lastName,
        userName,
        email,
        password

    });
};

module.export = { registerUser };