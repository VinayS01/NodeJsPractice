const http = require("http");
const fs = require("fs");

const port = 5000;

http
  .createServer((req, res) => {
    // const text = fs.readFileSync(
    //   "./modules/builtin/content/big.txt",
    //   "utf8"
    // );
    // res.end(text);
    const fileStream = fs.createReadStream(
      "./modules/builtin/content/big.txt",
      "utf8"
    );
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(port);
