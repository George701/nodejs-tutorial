var http = require('http');
var fs = require('fs');
var log = require('./log')(module);

var server = new http.Server();

server.on(function(req, res){
    if (req.url == '/'){

        fs.readFile('index.html', function callback(err, info){ // callback

            if (err){
                log.error(err);
                res.statusCode=500;
                res.end("There is error in server");
            }
            res.end(info);
        });
        // res.end(info);
    }else if (req.url == '/now'){
        res.end(new Date().toString());
    } else {
        log.error("Not found");
        res.statusCode=404;
        res.end("Web page is not found");
    }
});

server.listen(3000);