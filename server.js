var http = require('http');

var opts = require('optimist').argv;

// console.log(process.env.HOME);

http.createServer(function(req, res){

    if (process.env.NODE_ENV == 'production'){
        console.log("production");
    }else if (process.env.NODE_ENV == 'development'){
        console.log("development");
    }

    res.end("The server is running!");

}).listen(opts);