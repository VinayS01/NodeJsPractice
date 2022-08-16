const { writeFileSync } = require("fs");

for (let i = 0; i < 1000; i++) {
  writeFileSync("./modules/builtin/content/big.txt", `Hello World ${i}\n`, {
    flag: "a",
  });
}
