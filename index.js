// //
// setInterval(() => {
//   console.log("Hello! World");
// }, 2000);
// console.log("I will run the first task");
const http = require("http");
const port = 5000;
const server = http.createServer((req, res) => {
  console.log("requset event");
  res.end("Hello! World");
});

server.listen(port, () => {
  console.log("Example app listen on port:", port);
});
