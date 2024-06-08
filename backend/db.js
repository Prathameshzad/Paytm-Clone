const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017").then(() => console.log('connected'));

const userSchema = new mongoose.Schema({
    username: {
       type: String,
       unique: true,
       required: true,
       trim: true,
       lowercase: true,
       minLength: 3,
       maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 4
    },
    firstName: {
        type: String,
       required: true,
       trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    }
})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance:{
        type: Number,
        required: true
    }
})

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = {
    User,
    Account
};