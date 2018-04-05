var domain = require('domain');
var fs = require('fs');
var http = require('http');

var d = domain.create(), server;

d.on('error', function(err){
    console.error("Domain catches %s", err);
});

d.run(function(){
    //d.enter();  -> process.domain

    //Try catch inside on .run


    d.add(server);     //server <-> domain

    d.remove(server);

    // d.exit
});

server.on('boom', function(){
    setTimeout(function(){
        fs.readFile(__filename, function(){
            ERROR();
        });
    },1000);
});

server.emit('boom');