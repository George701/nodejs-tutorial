var EventEmmiter = require('events').EventEmitter;

var db = new EventEmmiter();

function Request(){
    var self = this;

    this.bigData = new Array(1e6).join('*');

    this.send = function(data){
        console.log(data);
    };

    //instead of the last function, to prevent memory leaking
    function onData(info){
        self.send(info);
    }

    this.end = function(){
        db.removeListener('data', onData)
    };

    db.on('data', onData);
    //connection between function request and object db
    // db.on('data', function(info){
    //     self.send(info);
    // }); //db.emit
}

setInterval(function(){
    // module heapdump helps to seek memory leaking
    var request = new Request();
    //..
    request.end();
    console.log(process.memoryUsage().heapUsed);
    console.log(db);
}, 200);