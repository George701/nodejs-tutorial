var http = require('http');
var fs = require('fs');
var chat = require('./chat');

http.createServer(function(req, res){

    console.log(req.url);
    switch (req.url){
        case '/':
            console.log("look here");
            sendFile("index.html", res);
            break;

        case '/subscribe':
            chat.subscribe(req, res);
            break;

        case '/publish':
            var body = '';

            req.on('readable', function(){
                body += req.read();
                console.log("reading message: " + body);        //error occurs HERE!!!
                //checking if message is not too long
                if (body.length > 1e4){
                    res.statusCode = 413;
                    console.log("Too big message");
                    res.end("Your message is too big for this chat");
                }else{
                    console.log(body);
                }
            }).on('end', function(){

                //checking if message is valid in terms of JSON
                try{
                    console.log("trying to end" + body);
                    body = JSON.parse(body);
                }catch(e){
                    console.log("exception");

                    res.statusCode = 400;
                    res.end("Bad Request");
                    return;
                }

                chat.publish(body.message);
                console.log("Sent message" + message);
                res.end("ok");
            });
            break;

        default:
            res.statusCode = 404;
            res.end("Not Found");
    }
}).listen(3000);


function sendFile(fileName, res){
    var fileStream = fs.createReadStream(fileName);
    fileStream
        .on('error', function(){
            res.statusCode= 500;
            res.end("Server error");
        }).
        on('open', function(){
            console.log("open");
        }).
        on('close', function(){
            console.log("close");
        }).
        pipe(res);

    res.on('close', function(){
        file.destroy();
    });
}
