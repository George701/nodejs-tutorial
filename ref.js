var http = require('http');

var server = new http.Server(function(req, res){

}).listen(3000);

setTimeout(function(){
    server.close(function(){
        // process.exit();          //bad
        // clearInterval(timer);    //better
    });
}, 2500);

var timer = setInterval(function(){
    console.log(process.memoryUsage());
},1000);

// functions, modules, and even servers

timer.unref();                      //the best
// timer.ref();                     //if needed