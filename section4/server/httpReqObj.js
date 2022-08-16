const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "OK", {
      "content-type": "text/html",
    });
    res.write("<h1> Welcome to Homepage </h1>");
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, "OK", {
      "content-type": "text/html",
    });
    res.write("<h1> About information </h1>");
    res.end();
  } else {
    res.writeHead(404, "Not Found", {
      "content-type": "text/html",
    });
    res.write("<h5> your requested url does not exists! </h5>");
    res.end();
  }
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server is started in port: ${port}`);
});
