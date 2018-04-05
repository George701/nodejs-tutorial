var http = require('http');

http.createServer(function (req, res){
   // setTimeout(function(){
   //     // not unstable, because most of the time we need a breaking point, which might be undefined
   // }, 0);
   //  process.nextTick(function(){
   //      req.on('readable', function(){
   //          // will work on nearest data, first in the row
   //      })
   //  });

    var part = 0;
    setImmediate(function run(){
        heavyCalc(part++);
        if (notFinnished) setImmediate(run);
    });

}).listen(1337);