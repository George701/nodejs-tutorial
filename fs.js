var fs = require('fs');

// fs.ReadStream inherited from stream.Readable
var stream = new fs.ReadStream(__filename, {encoding:'utf-8'});
// var stream = new fs.ReadStream("index.html");

stream.on('readable', function(err){
    // if (err) throw err;
    var data = stream.read();
    console.log(data);
    // console.log(data.length);
});

stream.on('end', function(err){
    // if (err) throw err;
    console.log("THE END")
});