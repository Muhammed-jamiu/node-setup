const { isUtf8 } = require("buffer");
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first);
console.log(second);

writeFileSync("./content/third.txt", "Hello! Welcome to our world of Coding,", {
  flag: "a",
});
// writeFileSync("./content/subfolder/fouth.js", "'Hello! World'");
