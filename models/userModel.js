var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var config = require('../config/database');
const {Todo} = require('./todo');
//user schema
const userSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    username : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', userSchema);

module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
};

module.exports.getUserByUsername = (username, callback) => {
    const query = { username: username }
    User.findOne(query, callback);
}

module.exports.addUser = (newUser, callback) => {
    console.log("progress")
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) {
                console.log(err);
                throw err;
            } else {
            console.log("notdone");
                newUser.password = hash;

                newUser.save (callback);

                }
        });
    });
}

module.exports.comparePassword = (password, hash, callback) => {
    bcrypt.compare(password, hash, (err, isMatch) => {
        if(err) {
            throw err;
        } else {
            callback(null, isMatch);
        }
    });
}