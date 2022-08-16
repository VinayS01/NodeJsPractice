const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome home");
  } else if (req.url === "/about") {
    // Blocking Code
    for (let i = 0; i < 1000; i++){
      for (let j = 0; j < 1000; j++){
        console.log(`Looped ${i} ${j}`);
      }
    }
    res.end("this is about page");
  } else {
    res.end("Error");
  }
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server is started in port: ${port}`);
});