const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./modules/builtin/content/first.txt", "utf8");
const second = readFileSync("./modules/builtin/content/second.txt", "utf8");

writeFileSync(
  "./modules/builtin/content/result-sync.txt",
  `Here are the result of: ${first} & ${second}`,
  { flag: "a" }
);