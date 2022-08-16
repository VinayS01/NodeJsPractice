const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "text/html",
  });
  res.write("<h1> Welcome to Homepage </h1>");
  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server is started in port: ${port}`);
});
