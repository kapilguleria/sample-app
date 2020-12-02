'use strict';

module.exports = function (express) {
    const router = express.Router();
    const storeController = require('../controllers/storeController');
    const orderController = require('../controllers/orderController')

    router.use('/get-store', storeController.getStore);
    router.use('/get-order', orderController.getOrder);
    return router;
}