var fs = require('fs');
var colors = require('colors');


fs.readdir('./', 'utf-8', function(err, files) { 
    if (err) throw err;
    console.log('Czytam katalog'.inverse);
    console.log(files);
    files.forEach(function (item) {
        fs.appendFile('./pliki.txt', " \n"+item,function(err, data) {
            if (err) throw err;
        });
    });
   
});

fs.readFile('./pliki.txt','utf-8', function(err, data) {
    console.log('Dane : ',data);
});