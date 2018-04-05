//Accessing the module of user.js with exports
var user = require('./user');

var name_1 = new user.User("John");
var name_2 = new user.User("Mary");

name_1.hello(name_2);

//Accessing the module of index.js with globals
// require('./user');
//
// var name_1 = new User("John");
// var name_2 = new User("Mary");
//
// name_1.hello(name_2);