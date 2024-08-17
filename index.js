const http = require("http");
const port = 7000;
const app = http.createServer((req, res) => {
  // console.log(req);

  if (req.url === "/") {
    res.write("Hello! Welcome to Home Page");
    res.end();
  }
  if (req.url === "/profile") {
    res.write("Welcome to Profile Page");
    res.end();
  }
  if (req.url === "/about-us") {
    res.write("Here is what you have to known about-us");
    res.end();
  }
  res.write(`<h1>Oops!</h1>
    <p>Page Not Found </p>
    <small>Sorry! you can try some other time
    <a href="/">back home</a>`);
});

app.listen(port, () => {
  console.log("Example app is Listening on ", port);
});
