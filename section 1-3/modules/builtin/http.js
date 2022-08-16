const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to NodeJS homepage");
  } else if (req.url === "/about") {
    res.end("This is about page");
  } else {
    res.end(
      `<h1>Oops</h1>
      <p>The page you are trying to request. does not exist!</p>
      <a href="/">Click here</a> to go back to homepage`
    );
  }
});

server.listen(5000);
