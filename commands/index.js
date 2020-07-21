var fs = require('fs');
var request = require ('request');
const { doesNotMatch } = require('assert');

module.exports = {
    pwd: function(args, done) {
        // process.stdout.write(__dirname);
        done(__dirname)
    },
    date: function(args, done) {
        // process.stdout.write(Date()) 
        done(Date())
    },
    ls: function(args, done){
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            var output= ""
            files.forEach(function(file) {
            //   process.stdout.write(lsfile.toString() + "\n");
            output= output + file.toString() + "\n"
            })
            done(output); 
            // process.stdout.write("prompt > ");
          });
    },
    echo: function(args, done) {
        // process.stdout.write(args.join(' '));
        done(args.join(' '));
    },
    cat: function(args, done) {
        fs.readFile(args[0], 'utf-8', function (err, data){
            if (err) throw err;
            done(data);
            // process.stdout.write (data + "\n")
            // process.stdout.write ("prompt > ");
        })
    },
    head: function(args, done) {
        fs.readFile (args[0], 'utf-8', function (err, data) {
            if (err) throw err;
            var lines = data.split("\n").splice(0, args[1] || 5).join("\n");
            // process.stdout.write(lines)
            done(lines);
        })
    },
    curl: function(args, done) {
        request(args[0], function (err, res, body){
            if (err) throw err;
            process.stdout.write(body)
            // process.stdout.write ("prompt > ");  
            done(body); 
        })
    },
    exit: function (args, done) {
        process.exit();
    }
}