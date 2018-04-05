var fs = require('fs');

fs.open(__filename, "r", function (err, file) {
    if (err){
        console.log(err);           //will take the last place
    }else{
        console.log("IO!");
    }
});

setImmediate(function(){
    console.log("immediate");       //will be second
});

process.nextTick(function(){
    console.log("nextTick");        //will be first
});