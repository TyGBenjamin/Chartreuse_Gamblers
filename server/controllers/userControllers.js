const asyncHandler = require('express-async-handler')
const User = require('../userModels/userModel')

const registerUser = asyncHandler (async (req, res) => {
    const { firstName, lastName, userName, email, password}=req.body;

    const userExists= await User.findOne ({ email });

     if (userExists){
         res.status(404);
         throw new Error ("user already exists");
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
          name: user.firstName.lastName,
          userName: user.userName,
          email: user.email,
          token: generateToken(user._id),
        });
      } else {
        res.status(400);
        throw new Error("User not found");
      }
    });
    
    res.json({
        firstName,
        lastName,
        userName,
        email,
        password,
    });
});



module.exports = { registerUser };