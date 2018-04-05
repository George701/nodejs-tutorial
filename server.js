var http = require('http');
var fs = require('fs');
var log = require('./log')(module);

// 1. Do not block other functions
// 2. callback(err)
// 3. Harder than synchronous, but it is the way to make life easier

http.createServer(function(req, res){
    var info;
    if(req.url == '/'){
        // info = fs.readFileSync('index.html');
        fs.readFile('index.html', function callback(err, info){ // callback
            // Always remember about mistakes that might appear, to prevent it there is an argument,
            // which will throw an error, if true
            // callback(error)
            // callback(null, ...)
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
}).listen(3000);