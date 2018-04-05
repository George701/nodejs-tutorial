//module.exports = exports = this
var User = require('./user');

var db = require('./db');
db.connect();


function run(){
    var name_1 = new User("John");
    var name_2 = new User("Mary");
    name_1.hello(name_2);

    console.log(db.getPhrase("Run successful"));
}

//Accessing the module of index.js with globals
// require('./user');
//
// var name_1 = new User("John");
// var name_2 = new User("Mary");
//
// name_1.hello(name_2);

if (module.parent){
    exports.run = run;
}
else{
    run();
}