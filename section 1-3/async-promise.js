const { readFile, writeFile } = require("fs");
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./modules/builtin/content/first.txt", "utf8");
    const second = await readFile(
      "./modules/builtin/content/second.txt",
      "utf8"
    );
    await writeFile(
      "./modules/builtin/content/result-mind-grenade.txt",
      `This is awesome: ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first);
    console.log(second);
  } catch (err) {
    throw err;
  }
};

start();

// const getPath = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getPath("./modules/builtin/content/result-sync.txt")
//   .then((res) => console.log(res, "Response"))
//   .catch((err) => console.log(err));
