var util = require('util');

var str_1 = util.format("My %s %d %j", "string", 123, {test:"obj"});
var str_2 = util.format("My %s %d %j", "string", "...", {test:"obj"});
var str_3 = util.format("My %d%s %j", 3, "ed work with util", {test:"obj"});

console.log(str_1);
console.log(str_2);
console.log(str_3);