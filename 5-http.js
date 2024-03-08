const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Welcome to our homepage");
  } else if (req.url == "/about") {
    res.end("Welcome to our about page");
  } else if (req.url == "/contact") {
    res.end("Welcome to our contact");
  }
  res.write(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page that you are looking for</p>
  <a href="/">back home</a> `);
  res.end();
});

server.listen(5000);
