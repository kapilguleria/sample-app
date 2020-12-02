'use strict';

const status = require('../utils/status');
const { successAction, failAction } = require('../utils/response');
const Message = require('../utils/messages');
const { getStoreData } = require('../services/store');

module.exports = {
    getStore
};

/**************** Get Store ***********/
async function getStore(req, res) {
    try {
        const store = await getStoreData();
        res.status(200).json(successAction(store, Message.registerSuccess));
    } catch(error) {
        res.status(400).json(failAction(status.FAILURE, error.message));
    }
}