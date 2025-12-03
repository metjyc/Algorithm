const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input);
let result = 1;
let count = 1;

while (result < N) {
  result += count * 6;
  count++;
}
console.log(count);
