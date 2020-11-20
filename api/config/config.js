'use strict';

const config = {
    local: {
        DATABASE: {
            dbname: 'db_big_commerce',
            host: 'mongodb://localhost:27017/',
            port: 0,
            username: 'root',
            password: 'root'
        },
    },
    live: {
        DATABASE: {
            dbname: 'db_big_commerce',
            host: '',
            port: 0,
            username: 'root',
            password: 'root'
        },
    }
};
module.exports.get = function get() {
    return config.local;
}