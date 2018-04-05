var http = require('http');
var url = require('url');

var server = http.createServer();

server.on('request', function(req, res){

    var urlParse = url.parse(req.url, true);
    // debugger;       //inspector will stop here
    WTF();

    if(res.method == "GET" && urlParse.pathname == '/echo' && urlParse.query.message){
        res.statusCode = 200;
        res.end("Everything is fine");
        res.end(urlParse.query.message);
    }else{
        res.statusCode = 404;
        res.end("Page not found");

    }
});

server.listen(1337);
console.log("Server is running");
