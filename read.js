var fs = require('fs');

// reading the file
// fs.readFile(__filename,{encoding: 'utf-8'}, function(err, data){
//     if (err){
//         console.err(err);
//     } else {
//         console.log(data);
//     }
// });

// checking if file exists
// fs.stat(__filename, function(err, stats){
//     console.log(stats.isFile());
//     console.log(stats)
// });

// creation a new file

fs.writeFile("file.tmp", "data", function(err){
    if (err) throw err;

    // renaming the file
    fs.rename("file.tmp", "new.tmp", function(err){
        if (err) throw err;

        // delete
        fs.unlink("new.tmp", function(err){
            if (err) throw err;
        });
    });
});