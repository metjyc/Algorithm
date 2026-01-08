const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const A = BigInt(input[0]);
const B = BigInt(input[1]);

console.log((A + B).toString());
console.log((A - B).toString());
console.log((A * B).toString());