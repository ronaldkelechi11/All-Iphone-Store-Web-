const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        lowecase: true,
        max: 64,
    },
    telephone: String,
    address: String,
    dateOfBirth: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        lowecase: true,
        max: 64
    }
})

module.exports = mongoose.model("User", userSchema);