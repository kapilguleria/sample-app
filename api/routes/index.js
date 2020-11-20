'use strict';

module.exports = function (express) {
    var router = express.Router();
    var userController = require('../controllers/UserController');
    router.post('/login', userController.login);
    router.post('/signup', userController.signup);
    return router;
}