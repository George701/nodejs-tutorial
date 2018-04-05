//http://127.0.0.1/echo?message=Hello -> Hello

var http = require('http');
var url = require('url');

var server = new http.Server(function(req, res){

    //Get headers from browser
    // console.log(req.headers);

    var urlParsed = url.parse(req.url, true);
    console.log(urlParsed);

    if(urlParsed.pathname == '/echo' && urlParsed.query.message){
        // res.statusCode = 200;       //OK
        //Do not keep header in cache
        res.writeHead(200, "OK", {'Cache-control':'no-cache'});
        // res.setHeader('Cache-control', 'no-cache'); // removeHeader
        res.end(urlParsed.query.message);
    }else{
        res.statusCode = 404;       //Not found
        res.end("Page not found");
    }
});

server.listen(1337, '127.0.0.1');