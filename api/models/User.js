'use strict';

var mongoose = require('mongoose');
var Users = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        default: ''
    },
    last_name: {
        type: String,
        required: true,
        default: ''
    },
    email: {
        type: String,
        required: true,
        default: ''
    },
    password: {
        type: String,
        required: true,
        default: ''
    },
    phone: {
        type: Number,
        required: true,
        default: ''
    }
}, {
    timestamps: true
});

var Users = mongoose.model('Users', Users);
module.exports = Users;