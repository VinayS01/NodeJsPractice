const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Created the server");
  res.end("Homepage");
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server is started in port: ${port}`);
});
