const commands = require('./commands/index.js');

function done(output) {
  process.stdout.write (output);
  process.stdout.write('\nprompt > ');
}

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  var args= data.toString().trim().split(' ');
  var cmd= args.shift();
  //console.log(cmd)
  commands[cmd](args, done);
  // process.stdout.write('\nprompt > ');
});




