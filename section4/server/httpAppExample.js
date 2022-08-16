const http = require("http");
const fs = require("fs");

const homePage = fs.readFileSync("../html/HomePage.html");
const css = fs.readFileSync("../css/HomePage.css");
const js = fs.readFileSync("../js/homePage.js");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.writeHead(200, "OK", {
      "content-type": "text/html",
    });
    res.write(homePage);
    res.end();
  } else if (req.url === "/css/HomePage.css") {
    res.writeHead(200, "OK", {
      "content-type": "text/css",
    });
    res.write(css);
    res.end();
  } else if (req.url === "/js/homePage.js") {
    res.writeHead(200, "OK", {
      "content-type": "text/javascript",
    });
    res.write(js);
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
