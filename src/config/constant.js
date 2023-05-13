/*HTTP Codes*/
exports.API_SUCCESS_CODE        = 200;
exports.API_NOT_FOUND           = 404;
exports.API_SUCCESS_CODE_POST   = 200;
exports.API_SUCCESS_CODE_GET    = 202;
exports.API_ERROR_CODE          = 400;//405
exports.API_ERROR_CONFLICT      = 409;
exports.API_VAL_ERROR           = 412;
exports.API_INTERNAL_ERROR      = 500;
exports.API_REC_NOT_FOUND_CODE  = 201;
exports.API_UNAUTHORIZED_REQ    = 401;
exports.API_DB_TIMEOUT          = 408;
exports.API_ERR_STATUS			= 400;
exports.API_SESS_KEY			= 440;

/*General*/
exports.METHOD = 'METHOD ';
exports.LOG_TIME_UNIT = ' ms';
exports.TIMESTAMP_FORMAT = 'YYYY-MM-DD HH:MM:SS';
exports.USER_TIMESTAMP_FORMAT = 'DD-MM-YYYY HH:MM:SS';

exports.REGISTERUSERS = 'REGISTER USERS';
exports.CREATEPURCHASEORDER = 'CREATE PURCHASE ORDER';
exports.UPDATEPURCHASEORDER = 'UPDATE PURCHASE ORDER';
exports.PURCHASEORDERREPORT = 'PURCHASE ORDER REPORT';
exports.INVENTORYCREATE = 'INVENTORY CREATE';
exports.INVENTORYUPDATE = 'INVENTORY UPDATE';
exports.INVENTORYDELETE = 'INVENTORY DELETE';
exports.INVENTORYREPORT = 'INVENTORY REPORT';
exports.CREATEORDER = 'CREATE ORDER';
exports.UPDATEORDER = 'UPDATE ORDER';
exports.DELETEORDER = 'DELETE ORDER';
exports.GETORDER = 'GET ORDER';