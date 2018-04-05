var util = require('util');

//Parent
function Animal(name){
    this.name = name;
}

Animal.prototype.walk = function(){
    console.log(this.name + " walks");
};

//Child
function Rabbit(name){
    this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function(){
    console.log(this.name + " jumps");
};

//Usage
var rabbit = new Rabbit("Our bunny");
rabbit.walk();
rabbit.jump();