const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/students/student") {
    res.write("Hello! Welcome to our world of Coding");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Example serer listening on port 3000");
});
