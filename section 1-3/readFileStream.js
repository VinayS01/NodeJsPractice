const { createReadStream } = require("fs");

const stream = createReadStream("./modules/builtin/content/big.txt");

stream.on("data", (result) => {
  console.log(result);
});

