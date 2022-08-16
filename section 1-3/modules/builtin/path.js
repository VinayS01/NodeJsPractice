const path = require("path");

console.log(path.sep,"sep");

const filePath = path.join('/modules/', 'builtIn', 'content' , 'subfolder', 'test.txt');
console.log(filePath,"join");

const base = path.basename(filePath);
console.log(base,"basename");

const resolve = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(resolve, "resolve");