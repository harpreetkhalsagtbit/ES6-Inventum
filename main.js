// const http = require('http');
// const longComputation = () => {
//   let sum = 0;
//   for (let i = 0; i < 1e9; i++) {
//     sum += i;
//   };
//   return sum;
// };
// const server = http.createServer();
// server.on('request', (req, res) => {
//     console.log('called')
//     var then = Date.now()
//     if (req.url === '/compute') {
//     const sum = longComputation();
//     console.log("exit", Date.now() - then)
//     return res.end(`Sum is ${sum}`);
//   } else {
//     res.end('Ok')
//   }
// });

// server.listen(3000);

var fs = require('fs');

// var readStream = fs.createReadStream('test.logs');
// readStream
//   .on('data', function (chunk) {
//       console.log(chunk.toString())
//   })
//   .on('end', function () {
//       console.log("end")
//   });

var lastChunk = ''
fs.watch('./test.logs', { encoding: 'buffer' }, (eventType, data) => {
    if (data) {
      // Prints: <Buffer ...>
      var readStream = fs.createReadStream('test.logs');
    function xformer () {      
        return new require('stream').Transform({
            transform: function(chunk, encoding, callback) {
                let str = chunk.toString();
                callback(false, str.replace(lastChunk, ""));
                lastChunk = str;
            }
        })
      }
    readStream.pipe(xformer()).pipe(process.stdout)
        // readStream
        // .on('data', function (chunk) {
        //     let str = chunk.toString();
        //     // console.log("\x1b[32m", str.replace(lastChunk, "").replace("\n", ''))
        //     // console.log('\x1b[36m',str.replace(lastChunk, "").trim(),'\x1b[0m');
        //     console.log(str.replace(lastChunk, "").trim());

        //     lastChunk = str;
        // })
        // .on('end', function () {
        //     // console.log("end")
        // });

    }
  });