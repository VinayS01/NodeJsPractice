const { readFile, writeFile } = require("fs");

readFile("./modules/builtin/content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log(first, "first");
  readFile("./modules/builtin/content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log(second, "second");
    writeFile(
      "./modules/builtin/content/result-sync.txt",
      `Here is the result: ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log('Data created');
        }
      }
    );
    readFile(
      "./modules/builtin/content/result-sync.txt",
      "utf8",
      (err, result) => {
        if (err) {
          console.log(err);
        } else if (result.length < 0 || result === "") {
          console.log("file is empty");
        } else {
          console.log(result, "Result Shown");
        }
      }
    );
  });
});
