'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('Users');

const status = require('../utils/status');
const { success, failed } = require('../utils/response');
const bcrypt = require('bcrypt');
const salt = 10;
const jwt = require('jsonwebtoken');
const jwtSecret = 'BigCommerce@123';
const expDuration = 60 * 60 * 24 * 1; // expiration duration 8 Hours

module.exports = {
    login: login,
    signup: signup
};

function login(req, res) {
    async function login() {
        try {
            if (req.body.email && req.body.password) {
                var email = req.body.email;
                var password = req.body.password;
                var jwtToken = null;
                User.findOne({ email: req.body.email }).then(result => {
                    if (result) {
                        var hashPassword = bcrypt.compareSync(password, result.password);
                        if (hashPassword == true) {
                            jwtToken = jwt.sign({ email: email }, jwtSecret, {
                                expiresIn: expDuration
                            });
                            var data = { userdata: result, token: jwtToken };
                            res.json(success(data, 'Login Sucessfully!'));
                        } else {
                            res.json(failed(status.FAILURE, 'Incorrect Password!'));    
                        }
                    } else {
                        res.json(failed(status.FAILURE, 'Incorrect Username!'));
                    }
                });
            } else {
                res.json(failed(status.FAILURE, 'Please fill all the fields!'));
            }
        } catch (error) {
            res.json(failed(status.SERVER_FAILURE, 'Something went wrong!'));
        }
    }
    login().then();
}

function signup(req, res) {
    async function signup() {
        try {
            if (req.body.first_name && req.body.last_name && req.body.email && req.body.password && req.body.phone) {
                User.findOne({ email: req.body.email }).then(result => {
                    if (result) {
                        res.json(failed(status.FAILURE, 'Email Alreday Exist!'));
                    } else {
                        var hashpassword = bcrypt.hashSync(req.body.password, salt);
                        var data = {
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            email: req.body.email,
                            password: hashpassword,
                            phone: req.body.phone
                        };
                        User.insertMany(data).then(result1 => {
                            res.json(success(result1, 'Signup Sucessfully!'));
                        });
                    }
                });
            } else {
                res.json(failed(status.FAILURE, 'Please fill all the fields!'));
            }
        } catch (error) {
            res.json(failed(status.SERVER_FAILURE, 'Something went wrong!'));
        }
    }
    signup().then();
}