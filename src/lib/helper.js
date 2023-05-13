var bunyan = require('bunyan');

exports.successJsonRes = (msg = 'Success', data = null) => {
  const res = {
    code: 200,
    status: 'success',
    message: msg
  }
  if (data) {
    res.data = data
  }

  return res
}

exports.failedJsonRes = (msg, statusCode = 400) => {
  return {
    code: statusCode,
    status: 'failure',
    message: msg
  }
}

var logger = null;
exports.getLogger = function (appName) {
  
  if (!logger || null === logger) {
    var logger = bunyan.createLogger({
      name    : appName,
      streams : [{
        type   : 'rotating-file',
        path   : 'logs/' + appName + '.log',
        period : '1d', // daily rotation
        count  : 10 // keep 3 back copies
      }]
    });
  }
  return logger;
};

exports.getProcessingTime = function clock(start) {
  if (!start) return process.hrtime();
  var end = process.hrtime(start);
  return Math.round((end[0] * 1000) + (end[1] / 1000000));
};
