const { fork } = require('child_process');

const http = require('http');
const longComputation = () => {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  };
  return sum;
};
const server = http.createServer();
server.on('request', (req, res) => {
    console.log('called')
    var then = Date.now()
    if (req.url === '/compute') {
    // const sum = longComputation();
    // console.log("exit", Date.now() - then)
    const forked = fork('childFork.js');

    forked.on('message', (msg) => {
        console.log('Message from child', msg);
        forked.kill();
        return res.end(`Sum is ${msg}`);
    });

    forked.send({ hello: 'world' });
  } else {
    res.end('Ok')
  }
});

server.listen(3000);
