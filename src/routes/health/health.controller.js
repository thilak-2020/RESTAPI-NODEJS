exports.serverHealthCheck = function (req, res) {
    res.send({"code" : 200, "message" : "Store Management Server is Up and Running!"});
}; 