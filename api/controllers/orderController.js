'use strict';

const status = require('../utils/status');
const { successAction, failAction } = require('../utils/response');
const Message = require('../utils/messages');
const { getOrderData } = require('../services/order');

module.exports = {
    getOrder
};

/**************** Get Store ***********/
async function getOrder(req, res) {
    try {
        const order = await getOrderData();
        res.status(200).json(successAction(order, Message.getOrders));
    } catch(error) {
        res.status(400).json(failAction(status.FAILURE, error.message));
    }
}