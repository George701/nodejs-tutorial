var http = require('http');
var fs = require('fs');

new http.Server(function(req, res){
    //res instanceof http.ServerResponse < stream.Writable

    if (req.url == '/big.html'){
        //require a lot of memory
        // fs.readFile('big.html', function(err, content){
        //     if (err){
        //         res.statusCode = 500;
        //         res.end("Server error");
        //     } else {
        //         res.setHeader("Content-Type", "txt/html; charset=utf-8");
        //         res.end(content);
        //     }
        // });

        var file = new fs.ReadStream('big.html');
        sendFile(file, res);
    }
}).listen(3000);

function sendFile(file, res){

    // Universal and trusted way!!!!!
    // file.on('readable', write);
    //
    // function write(){
    //
    //     var fileContent = file.read();      // read
    //     // res.write(fileContent);      // consume too much memory
    //
    //     if (fileContent && !res.write(fileContent)){   //send
    //
    //         // when buffer is full
    //         file.removeListener('readable', write);
    //
    //         res.once('drain', function(){   // wait
    //             file.on('readable', write);
    //             write();
    //         });
    //     }
    // }
    // file.on('end', function(){
    //     res.end();
    // });

    file.pipe(res);
    // file.pipe(process.stdout);

    file.on('error', function(err){
        res.statusCode = 500;
        res.end("Server error");
        console.error(err);
    });

    file
        .on('open', function(){
            console.log("open");
        })
        .on('close', function(){
           console.log("close");
        });
    // !!!!
    res.on('close', function(){
        file.destroy();
    });
}