var EventEmmiter = require('events').EventEmitter;

var server = new EventEmmiter;


//Subscribe
server.on('request', function(request){
    request.approved = true;
});

server.on('request', function(request){
    console.log(request);
});

server.emit('request', {from: "Client"});
server.emit('request', {from: "Another Client"});

server.on('error', function(){

});

server.emit('error');
// server.emit('error', new Error());  //throw TypeError