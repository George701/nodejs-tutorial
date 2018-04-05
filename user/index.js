//module.exports = exports = this
var db = require('../db');
var log = require('logger')(module);
//first of all we need to connect to db
// db.connect();


function User(name){
    this.name = name;
}

User.prototype.hello = function(who){
    log(this.name+": " + db.getPhrase("Hello") + ", " + who.name + "!");
};

//export variables and functions
// exports.User = User;
// this.User = User;
module.exports = User;

//global
// global.User = User;