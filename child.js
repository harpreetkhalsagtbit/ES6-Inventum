// // const { spawn } = require('child_process');

// // const child = spawn('find . -type f | wc -l', {
// //   stdio: 'inherit',
// //   shell: true,
// //   cwd: '/Users/harpeeetsingh/Downloads'
// // });

// // // wc.stdout.on('data', (data) => {
// // //   console.log(`Number of files ${data}`);
// // // });

// // child.on('exit', function (code, signal) {
// //   console.log('child process exited with ' +
// //               `code ${code} and signal ${signal}`);
// // });

// // // child.stdout.on('data', (data) => {
// // //   console.log(`child stdout:\n${data}`);
// // // });

// // // child.stderr.on('data', (data) => {
// // //   console.error(`child stderr:\n${data}`);
// // // });

// process.on('message', (msg) => {
//   console.log('Message from parent:', msg);
// });

// let counter = 0;

// setInterval(() => {
//   process.send({ counter: counter++ });
// }, 1000);

// const longComputation = () => {
//   let sum = 0;
//   for (let i = 0; i < 1e9; i++) {
//     sum += i;
//   };
//   return sum;
// };

// process.on('message', (msg) => {
//   const sum = longComputation();
//   process.send(sum);
// });

const http = require("http");
const longComputation = () => {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
};
const server = http.createServer();
server.on("request", (req, res) => {
  console.log("called");
  var then = Date.now();
  if (req.url === "/compute") {
    const sum = longComputation();
    console.log("exit", Date.now() - then);
    return res.end(`Sum is ${sum}`);
  } else {
    res.end("Ok");
  }
});

server.listen(3000);
