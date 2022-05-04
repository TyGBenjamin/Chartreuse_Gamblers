const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: [
        {
            type: String,
            trim: true,
        },
    ],
});

const User = model('Users', userSchema)

module.exports = User;