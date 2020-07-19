var mongoose                = require('mongoose');
var OrderSchema = require('../models/order.js');

// User Schema
var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Number
    },
    orders: [OrderSchema]
});

var User = module.exports = mongoose.model('User', UserSchema);