const status = require("./status");

exports.success = success;
exports.failed = failed;

function success (data, message = 'OK') {
  return ({ statusCode: status.SUCCESS, data, message });
}

function failed (statusCode, message = 'Fail',) {
  return ({ statusCode, data: null, message });
}