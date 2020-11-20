'use strict';

var mongoose = require('mongoose');
require('../models/User');

var Config = require('./config').get('local');

mongoose.connect(Config.DATABASE.host + Config.DATABASE.dbname, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, "connection failed"));
db.once('open', function () {
    console.log("Database conencted successfully");
});

mongoose.set('debug', false);