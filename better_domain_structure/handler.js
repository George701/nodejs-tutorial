// var fs = require('fs');
// Databases
var mysql = require('mysql').createClient();

module.exports = function handler(req, res){
    if (req.url == '/'){

        // fs.readFile('index.html', function(err, content){
        mysql.get("data", process.domain.bind(function(err, data){
            throw new Error("mysql callback");

            // if (err) throw err;

            // res.end(content);
        }));
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
};