// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url == "/hello") {
//     res.end("Hello World");
//   } else if (req.url == "/welcome") {
//     res.end("welcome Students");
//   } else {
//     res.writeHead(404);
//     res.end("You are trying to hit a wrong URL");
//   }
// });

// server.listen(8000, () => {
//   console.log("server Started");
// });

// const { createServer } = require("http");
// let server = createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.write(`<h1>Hello Node</h1>
//   <p> You asked for <code>${req.url}</code></p>`);
//   res.end();
// });

// server.listen(8000);
// console.log("Listening! (port 8000)");
