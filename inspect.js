var util = require('util');

var obj = {
    a: 5,
    b: 6,
    //if there is a property with function, only it will be executed
    inspect: function(){
        return 5+6;
    }
};
// Link to itself
obj.self = obj;

console.log(util.inspect(obj));
// console.log(obj);

var str = util.format("My %s %d %j", "string", 123, {test:"obj"});