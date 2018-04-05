var url = require('url');
var debug = require('debug')('server:request');

module.exports = function(req, res){
    var urlParsed = url.parse(req.url, true);

    debug("Got request", req.method, req.url);

    if (req.method == 'GET' && urlParsed.pathname == '/echo'){
        var message = urlParsed.query.message;
        console.log("Echo: " + message);
        res.end(message);
        return;
    }

    debug("Unknown URL");

    res.statusCode = 404;
    res.end('Not Found');
};