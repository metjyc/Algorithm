const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

console.log("\\    /\\");
console.log(" )  ( ')");
console.log("(  /  )");
console.log(" \\(__)|");
