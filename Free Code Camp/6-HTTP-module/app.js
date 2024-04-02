const http = require("http");

// Create a server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our Home Page");
  }
  else if (req.url === "/about") {
    res.end("Welcome to our About Page");
  } else {
    res.end(`<h1>Oops</h1>
    <a href="/">Back t home</a>
    `);
  }
});

server.listen(5000);